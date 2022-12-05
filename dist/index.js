"use strict";
// let id = 5 // JS way
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Test', true];
// Tuple Array
let employee;
employee = [
    [1, 'Test1'],
    [2, 'Test2'],
    [3, 'Test3']
];
// Union
let pid;
pid = '22';
// Enum - values default to numeric order (0, 1, 2, 3)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up, Direction2.Up);
const user1 = {
    id: 1,
    name: 'John'
};
// --- how to define #2 ---
const user2 = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid  // syntax #1 to change type
let customerId = cid; // syntax #2 to change type
// Functions
// types to parameters
// types to return value
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
log('reeee');
