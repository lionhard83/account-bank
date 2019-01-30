"use strict";
exports.__esModule = true;
var incrementalId = 0;
var Account = /** @class */ (function () {
    function Account(budget) {
        this.budget = budget;
        this.transactions = [];
        this.id = incrementalId++;
    }
    Account.prototype.sendMoney = function (amount, otherAccount, bank) {
        if (this.budget >= (amount + amount * 0.05)) {
            this.budget -= (amount + amount * 0.05);
            otherAccount.budget += amount;
            bank.budget += amount * 0.05;
            this.transactions.push({
                accountId: otherAccount.id,
                amount: -amount
            });
            otherAccount.transactions.push({
                accountId: this.id,
                amount: amount
            });
            bank.transactions.push({
                accountId: this.id,
                accountId2: otherAccount.id,
                amount: amount
            });
        }
    };
    return Account;
}());
exports.Account = Account;
