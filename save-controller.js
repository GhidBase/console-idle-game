export class SaveController {
    constructor(currentData = { health: 100, money: 0 }) {
        this.currentData = currentData;
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
