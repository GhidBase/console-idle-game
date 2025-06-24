console.log("game loaded");


import { SaveController } from "./save-controller.js";
const saveController = new SaveController();
window.saveController = saveController;


// this is a way you can create a function that
// can be accesed in the console by typing "foo"
Object.defineProperty(window, 'foo', {
  get: function () {
      console.log("hello world")
  }
});