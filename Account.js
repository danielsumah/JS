class Account {
    constructor(id = 0, balance = 100, annualInterestRate = 0){
        this._id = id;
        this._balance = balance,
        this._annualInterestRate = annualInterestRate;
    }

    get id(){
        return this._id
    }

    set id(id){
        this._id = id
    }

    get balance(){
        return this._balance
    }

    set balance(balance){
        this._balance = balance;
    }

    get annualInterestRate(){
        return this._annualInterestRate
    };

    set annualInterestRate(annualInterestRate){
        this._annualInterestRate = annualInterestRate;
    }

    get monthlyInterestRate(){
        return this._annualInterestRate / 12;
    }

    get monthlyInterest(){
        return this._balance * (this.monthlyInterestRate / 100)
    }

    set withdraw(amount){
        this._balance -= amount;
    }

    set deposit(amount){
        this._balance += amount;
    }
}


const testAccount = () => {
    const myAcc = new Account(1122, 20000,4.5)
    myAcc.withdraw = 2500
    myAcc.deposit = 3000

    console.log(`account id is ${myAcc.id}`)
    console.log(`account balance is ${myAcc.balance}`)
    console.log(`monthly interest rate is ${myAcc.monthlyInterestRate}`)
    console.log(`monthly interest is ${myAcc.monthlyInterest}`)
}

testAccount()