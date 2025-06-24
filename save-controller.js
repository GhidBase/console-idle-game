export class SaveController {
    constructor() {}

    save(saveData) {
        localStorage.setItem("save", saveData);
    }

    load() {
        let data = localStorage.getItem("save");
        console.log(data);
        return data;
    }
}