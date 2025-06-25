export class PlayerController {
    constructor(saveController) {
        this.saveController = saveController;
        this.initializePlayer();
    }

    initializePlayer() {
        let saveData = this.saveController.getData();
        // console.log(saveData);
    }
}
