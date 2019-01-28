"use strict";
exports.__esModule = true;
var incrementalId = 0;
var Account = /** @class */ (function () {
    function Account(budget) {
        this.budget = budget;
        this.transactions = [];
        this.id = incrementalId++;
    }
    Account.prototype.sendMoney = function (amount, otherAccount) {
        if (this.budget >= amount) {
            this.budget -= amount;
            otherAccount.budget += amount;
            this.transactions.push({
                accountId: otherAccount.id,
                amount: -amount
            });
            otherAccount.transactions.push({
                accountId: this.id,
                amount: amount
            });
        }
    };
    return Account;
}());
exports.Account = Account;
