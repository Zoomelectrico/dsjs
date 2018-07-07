export function isNotNull(data) {
    return data !== null;
}

export function isNotUndefined(data) {
    return typeof data !== "undefined";
}

export function isNull(data) {
    return data === null;
}

export function isUndefined(data) {
    return typeof data === "undefined";
}

export function isFunction(func) {
    return typeof func === "function";
}

export function isNotFunction(func) {
    return typeof func !== "function";
}

export function isArray(collection) {
    return collection instanceof Array;
}

export function isNotArray(collection) {
    return !(collection instanceof Array);
}