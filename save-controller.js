export class SaveController {
    constructor(currentData = { health: 100, money: 0 }) {
        this.currentData = currentData;
        this.startup()
    }

    startup() {
        let defaultSave = localStorage.getItem(1);
        if (defaultSave) {
            console.log(defaultSave);
        }
    }

    save(file) {
        localStorage.setItem(file, JSON.stringify(this.currentData));
    }

    load(file) {
        this.currentData = JSON.parse(localStorage.getItem(file));
        console.log(this.currentData);
    }

    updateData(stat, value) {
        this.currentData[stat] = value;
    }
}
