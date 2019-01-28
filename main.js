"use strict";
exports.__esModule = true;
var Account_1 = require("./Account");
var account1 = new Account_1.Account(100);
var account2 = new Account_1.Account(300);
var account3 = new Account_1.Account(50);
account1.sendMoney(75, account2);
console.log("account1:", account1);
console.log("account2:", account2);
