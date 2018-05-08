"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Activate is the 'entry point' for your plugin. This function
// is called when your plugin loads, with an Oni API object
// passed in.
// 
// Working with the Oni API is where all the interesting stuff happens!
exports.activate = function (oni) {
    // We'll create a simple status bar item
    alert("hello world");
};
