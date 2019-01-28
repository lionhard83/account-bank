let incrementalId = 0;
interface Transaction{
    accountId: number;
    amount: number;
}

export class Account{
    public id: number;
    public transactions: Transaction[] = [];

    constructor(public budget :number){
        this.id = incrementalId++;
    }

    sendMoney(amount: number, otherAccount: Account, bank: Account) :void {
        if (this.budget >= amount) {
            this.budget -= amount;
            otherAccount.budget += amount;
            this.transactions.push({
                accountId: otherAccount.id,
                amount: -amount
            })
            otherAccount.transactions.push({
                accountId: this.id,
                amount: amount
            })
        }
    }
}