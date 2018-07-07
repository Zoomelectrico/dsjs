"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNotNull = isNotNull;
exports.isNotUndefined = isNotUndefined;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isFunction = isFunction;
exports.isNotFunction = isNotFunction;
exports.isArray = isArray;
exports.isNotArray = isNotArray;
function isNotNull(data) {
    return data !== null;
}

function isNotUndefined(data) {
    return typeof data !== "undefined";
}

function isNull(data) {
    return data === null;
}

function isUndefined(data) {
    return typeof data === "undefined";
}

function isFunction(func) {
    return typeof func === "function";
}

function isNotFunction(func) {
    return typeof func !== "function";
}

function isArray(collection) {
    return collection instanceof Array;
}

function isNotArray(collection) {
    return !(collection instanceof Array);
}