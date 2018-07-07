"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var error = {
    "001": new Error("OMG, You have broken the library.\nError Code: 001\nCheck the docs for more details"),
    "100": new Error("The Data parameter can't be null.\nError Code: 100\nCheck the docs for more details"),
    "101": new Error("The Data parameter can't be undefined.\nError Code: 101\nCheck the docs for more details"),
    "102": new Error("The Collection parameter can't be null.\nError Code: 102\nCheck the docs for more details"),
    "103": new Error("The Collection parameter can't be undefined.\nError Code: 103\nCheck the docs for more details"),
    "104": new Error("The Collection parameter must be an Array.\nError Code: 104\nCheck the docs for more details"),
    "110": new Error("The index parameter can't be null.\nError Code: 110\nCheck the docs for more details"),
    "111": new Error("The index parameter can't be undefined.\nError Code: 111\nCheck the docs for more details"),
    "112": new Error("The index must be a integer.\nError Code: 112\nCheck the docs for more details"),
    "113": new Error("The index can't greater or equal than the list size.\nError Code: 113\nCheck the docs for more details"),
    "200": new Error("Can't iterate over an empty list.\nError Code: 200\nCheck the docs for more details"),
    "300": new Error("Tha Callback parameter must be a function.\nError Code: 300\nCheck the docs for more details")
};

exports.default = error;