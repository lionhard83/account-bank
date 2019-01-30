let incrementalId = 0;
interface Transaction{
    accountId: number;
    accountId2?: number;
    amount: number;
}

export class Account{
    public id: number;
    public transactions: Transaction[] = [];

    constructor(public budget :number){
        this.id = incrementalId++;
    }

    sendMoney(amount: number, otherAccount: Account, bank: Account) :void {
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
    }
}