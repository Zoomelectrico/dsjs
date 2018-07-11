/**
 * @function isNotNull
 * This is a helpers function that check if an element isn't null
 * @param {any} data the element to check
 * @return true if the element isn't null or false otherwise
 * @access public
 * @since 0.1.0
 */
export function isNotNull(data) {
    return data !== null;
}

/**
 * @function isNotUndefined
 * This is a helpers function that check if an element isn't undefined
 * @param {any} data the element to check
 * @return true if the element isn't undefined or false otherwise
 * @access public
 * @since 0.1.0
 */
export function isNotUndefined(data) {
    return typeof data !== "undefined";
}

/**
 * @function isNull
 * This is a helpers function that check if an element is null
 * @param {any} data the element to check
 * @return true if the element is null or false otherwise
 * @access public
 * @since 0.1.0
 */
export function isNull(data) {
    return data === null;
}

/**
 * @function isUndefined
 * This is a helpers function that check if an element is undefined
 * @param {any} data the element to check
 * @return true if the element is undefined or false otherwise
 * @access public
 * @since 0.1.0
 */
export function isUndefined(data) {
    return typeof data === "undefined";
}

/**
 * @function isFunction
 * This is a helpers function that check if an element is a function
 * @param {any} func the element to check
 * @return true if the element is function or false otherwise
 * @access public
 * @since 0.1.0
 */
export function isFunction(func) {
    return typeof func === "function";
}

/**
 * @function isNotFunction
 * This is a helpers function that check if an element isn't function
 * @param {any} func the element to check
 * @return true if the element isn't function or false otherwise
 * @access public
 * @since 0.1.0
 */
export function isNotFunction(func) {
    return typeof func !== "function";
}

/**
 * @function isArray
 * This is a helpers function that check if an element is an Array
 * @param {any} collection the element to check
 * @return true if the element is an Array or false otherwise
 * @access public
 * @since 0.1.0
 */
export function isArray(collection) {
    return collection instanceof Array;
}

/**
 * @function isNotArray
 * This is a helpers function that check if an element is't an Array
 * @param {any} collection the element to check
 * @return true if the element is't an Array or false otherwise
 * @access public
 * @since 0.1.0
 */
export function isNotArray(collection) {
    return !(collection instanceof Array);
}