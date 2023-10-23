//This is a comment

let variable1 = 2;
const variable2 = 3;

variable1 += 13;
variable1++;

//console.log(variable1, variable2);

//Object example
//Objects are written in JSON JavaScriptObjectNotation

let house = {
    windows: 4,
    doors: 2,
    people: 4,
    rooms: 5,
    road: 'Herschell'
};

//console.log(house);
//console.log(house.road)

let houseName = house.road;

//Classes

class Book {
    constructor(title, author, date) {
        this.title = title;
        this.author = author;
        this.date = date;
    }
}

let newBook = new Book('The sky', 'Tom Mazzag', 1923);
//console.log(newBook);

//Arrays

let guests = ['Tom', 'Oli', 'Mark', 'Ben'];
//console.log(guests[2]);


//.push = append to end of array
//.unshift = add to start of array
//.pop removes final element of the array

//.lenth gives lenth -- equivalent of python .len()

let loggedIn = true;
if (loggedIn) {
    //console.log('Logged in');
}   else {
    //console.log('Not logged in');
}

//For if statements, the condition that needs to be met goes in the brakcets for example

if (1 >= 2) {
}


// == === are different

let seats = 5;
let seats2 = '5';

if (seats == seats2) {
    //console.log('Equal')
}
if (seats === seats2) {
}   else{
    //console.log('Not Equal')
}

//=== checks for value as well as the type

//AND, OR are equqal to &&, ||

//not still same with !


let first = {
    name : 'Tom',
    place: 'first'
}
let second = {
    name : 'Mark',
    place: 'second'
}
let third = {
    name : 'Ben',
    place: 'third'
}

// A switch is used as an equivanelt of elseif

switch (first.name) {
    case 'Tom':
        //console.log('Tom is the user');
        break;  //Needed otherwise switch will go through all different cases
    case 'Mark':
        //console.log('Mark is the user');
        break;
    case 'Ben':
        //console.log('Ben is the user');
        break;
}

const noOfPassengers = 10;

for (let i = 0; i < noOfPassengers; i++) {
    //console.log(i)
    if (i == 8) {
        //console.log('Passenger 9 Boarded')
    }
}

const staff = [
    'Bob',
    'Steve',
    'Mike',
    'Logan'
]

for (let i in staff) {
    //console.log('Staff: ' + staff[i]);
}


//For OF loop

for (let poeple of staff) {
    //console.log(people);
    // can be used when index isnt needed and the specific value is 
}

//Defining a function
//Can use function at the start or const
const testFunciton = (inp1, inp2) => {
    const result = inp1 + inp2;
    return result;
}

//console.log(testFunciton(4, 2));


//using METHODS -- in this case showBalance, deposit

class bankAccount {
    constructor (name, balance, liabilities) {
        this.name = name;
        this.balance = balance;
        this.liabilities = liabilities;
    }
    showBalance() {
        console.log('Balance for ' + this.name + ' is £' + this.balance);
    }
    deposit(value) {
        console.log('Depositing £' + value);
        this.balance += value;
        this.showBalance();
    }
}

const tomAccount = new bankAccount('Thomas', 423, 0)
//tomAccount.showBalance()
//tomAccount.deposit(230.50)


//Static classes

class intro {
    static sayHi() {
        console.log('Hello!');
    }
    static sayHiTo(name) {
        console.log('Hello ' + name);

        //static can also have a return
    }
}

intro.sayHiTo('Tom')