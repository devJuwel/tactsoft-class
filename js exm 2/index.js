// function Bank(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.balance = balance;
//     this.deposit = function (amount) {
//         this.balance += amount;
//     }
//     this.withdraw = function (amount) {
//         this.balance -= amount
//     }
// }

// const juwel = new Bank("juwel", 5000);

// juwel.deposit(500)
// juwel.withdraw(2000)


// console.log(juwel);


class Bank {
    #balance;
    constructor() {

        this.#balance = 0;
        console.log("Your balance is :" + this.#balance);
    }

    deposit(amount) {
        this.#balance += amount;
        return `Your Deposit Amount  is :  ${amount}`
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount
        } else {
            console.log("Please enter valid amount for withdraw");
        }
        return `Your withdraw Amount  is :  ${amount}`;
    }
    get balance() {
        return `Your current Balance is :  ${this.#balance}`;

    }
}

const AlamAccount = new Bank();

console.log(AlamAccount.deposit(1700));
console.log(AlamAccount.withdraw(500))
console.log(AlamAccount.balance)



console.log(`\n \n \n \n `)



class Person {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }

    greet() {
        console.log(`Welcome ${this.name}`)
    }
    haveBirthday() {
        this.age += 1
        return this.age
    }
    get Information() {
        this.greet()        if (this.isStudent) {
            console.log("You are a student")
        } else {
            console.log("You are not a student")
        }
        console.log("Now your age is ", this.age)

        return 0;
    }
}

const juwel = new Person("Juwel", 12, true)

juwel.haveBirthday()

juwel.Information

console.log(`\n `)

const Robi = new Person("Robi", 32, true)

Robi.haveBirthday()
Robi.haveBirthday()
Robi.haveBirthday()

Robi.Information