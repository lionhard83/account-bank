import { Account } from "./Account";

const bank = new Account(0);
const account1 = new Account(100);
const account2 = new Account(300);
const account3 = new Account(50);


account1.sendMoney(75, account2, bank);
account2.sendMoney(100, account3, bank);

console.log("bank:", bank);

