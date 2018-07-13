/**
 * @member {object} error 
 * This object POJO contain the most commmon errors of our library the codes are the following
 * "001" : OMG, You have broken the library.
 * "100" : The Data parameter can't be null.
 * "101" : The Data parameter can't be undefined.
 * "102" : The Collection parameter can't be null.
 * "103" : The Collection parameter can't be undefined.
 * "104" : The Collection parameter must be an Array.
 * "110" : The index parameter can't be null.
 * "111" : The index parameter can't be undefined.
 * "112" : The index must be a integer.
 * "113" : The index can't greater or equal than the list size.
 * "200" : Can't iterate over an empty list.
 * "300" : Tha Callback parameter must be a function.
 * "401" : The key parameter can't be null.
 * "402" : The key parameter can't be undefined.
 * "500" : Can't sort an empty list.
 * "501" : The comparer callback can't be null.
 * "502" : The comparer callback can't be undefined. 
 * "503" : The comparer callback must be a function. 
 * @author Jose Roberto Quevedo
 * @since 0.1.0
 * @version 1.0.0
 * @example
 * throw error["001"]
 */
const error = {
    "001" : new Error("OMG, You have broken the library.\nError Code: 001\nCheck the docs for more details"),
    "100" : new Error("The Data parameter can't be null.\nError Code: 100\nCheck the docs for more details"),
    "101" : new Error("The Data parameter can't be undefined.\nError Code: 101\nCheck the docs for more details"),
    "102" : new Error("The Collection parameter can't be null.\nError Code: 102\nCheck the docs for more details"),
    "103" : new Error("The Collection parameter can't be undefined.\nError Code: 103\nCheck the docs for more details"),
    "104" : new Error("The Collection parameter must be an Array.\nError Code: 104\nCheck the docs for more details"),
    "110" : new Error("The index parameter can't be null.\nError Code: 110\nCheck the docs for more details"),
    "111" : new Error("The index parameter can't be undefined.\nError Code: 111\nCheck the docs for more details"),
    "112" : new Error("The index must be a integer.\nError Code: 112\nCheck the docs for more details"),
    "113" : new Error("The index can't greater or equal than the list size.\nError Code: 113\nCheck the docs for more details"),
    "200" : new Error("Can't iterate over an empty list.\nError Code: 200\nCheck the docs for more details"),
    "300" : new Error("The Callback parameter must be a function.\nError Code: 300\nCheck the docs for more details"),
    "401" : new Error("The key parameter can't be null.\nError Code: 401\nCheck the docs for more details"),
    "402" : new Error("The key parameter can't be undefined.\nError Code: 401\nCheck the docs for more details"),
    "500" : new Error("Can't sort an empty list.\nError Code: 500\nCheck the docs for more details"), 
    "501" : new Error("The comparer callback can't be null. \nError Code: 501\nCheck the docs for more details"),
    "502" : new Error("The comparer callback can't be undefined. \nError Code: 502\nCheck the docs for more details"),
    "503" : new Error("The comparer callback must be a function. \nError Code: 503\nCheck the docs for more details") 
};

export default error;