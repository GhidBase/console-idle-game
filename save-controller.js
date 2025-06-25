export class SaveController {
    constructor() {
        this.currentData;
        this.defaultSaveFile = 1;
        this.currentSaveFile = 1;
        this.startup();
    }

    /* 
        Controller Use:
        - startup loads the default save file
        - loaded data is stored in this.currentData
        - saved data is stored in localStorage
        - updateData(key,value) - updates loaded data
        - save() - saves loaded data to localStorage
        - load() - replaces the loaded data with the localStorage version
        - updateAndSaveData(key, value) - combines updating the loaded data,
            and saving it to the localStorage. I did this to make it easier to
            ensure that the localStorage version always matches with the
            loaded Data
    */

    startup() {
        /*
        I want this function to basically be the "Game Start" function of
        the save controller. When you open a game it should typically open
        up the default save file. 
        */

        this.currentSaveFile = this.defaultSaveFile;
        this.load(this.currentSaveFile);
        if (this.currentData) {
            console.log(`Loading save file ${this.currentSaveFile}`);
            // console.log(data);
        }
    }

    save() {
        localStorage.setItem(
            this.currentSaveFile,
            JSON.stringify(this.currentData)
        );
    }

    load() {
        let rawData = localStorage.getItem(this.currentSaveFile);
        if (rawData && rawData != `undefined`) {
            this.currentData = JSON.parse(rawData);
            console.log(this.currentData);
        } else {
            console.log("no save file");
            console.log("creating new save");
            this.currentData = { player: { health: 100, money: 20 } };
            this.save();
        }
    }

    erase() {
        localStorage.setItem(this.currentSaveFile, "");
    }

    updateData(stat, value) {
        this.currentData[stat] = value;
    }

    updateAndSaveData(stat, value) {
        this.currentData[stat] = value;
        this.save();
    }

    updateAndSavePlayerData(stat, value) {
        this.currentData["player"][stat] = value;
        this.save();
    }

    getData() {
        return this.currentData;
    }
}
