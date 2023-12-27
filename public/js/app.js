class user {
    constructor(name,email,age,password,password_confirmed){
        this.name=name;
        this.email=email;
        this.age=age;
        this.password=password;
        this.amount=15000;
        this.Investment = [];
        this.password_confirmed =password_confirmed ;
    }
}

//Name

function specialCharacters(name){
    let specialCharacters = `0123456789!"#%&$'()+*,-./;:<=>?@[\\]^_'\`{|}~♂♀'`;
    for (let letter of name) {
        if (specialCharacters.includes(letter)) {
            return true;
        }
    }
    return false;
} 

function specialNumbers(numbers){
    let specialDigits = '0123456789';
    for (let number of numbers) {
        if (!specialDigits.includes(number)) {
            return true;
        }
    }
    return false;
}

function NameChecker(name){
    name=name.charAt(0).toUpperCase() + name.slice(1);
    let words = name.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() +words[i].toLowerCase().substr(1);
    }
    name=words.join(" ");
    return name;
}

function containSpecialCharacters(password){
    let specialCharacters = `0123456789!"#%&$'()+*,-./;:<=>?@[\\]^_'\`{|}~♂♀'`;
    for (let special of specialCharacters) {
        if (password.includes(special)) {
            return true;
        }
    }
    return false;
}

function checkpassword(password){
    while(true){
        password = prompt(`Insert your password :<)`);
        if(!password){
            alert('your password is empty!')
        }else if(password.includes(' ')){
            alert(`The password should not contain spaces`);
        }else if(password.length<7){
            alert(`make sure that ur password more than & characters`);
        }else if(!containSpecialCharacters(password)){
            alert(`make sure that ur password has special character`);
        }else{
            password=password.trim();
            break;
        }
    }
    return password;
}


function withdrawMoney(user) {
    let money = parseFloat(prompt('Enter the amount that u want to withdraw:<)'))
    if (!money) {
        alert(`invalid amount of money '${money}'`)
    }else if (money > user.amount) {
        alert(`invalid amount of money you don't have enough money for that :<(`)
    }else{
        user.amount -= money;
    }
}

function DepositMoney(user) {
    let money = parseFloat(prompt('Enter the amount that u want to deposit :<)'))
    if (!money) {
        alert(`invalid amount of money '${money}'`)
    }else if (money > user.amount) {
        alert(`invalid amount of money you don't have enough money for that :<(`)
    }else{
        user.amount += money;
    }
}
function Invest(user) {
    let money =  parseFloat(prompt('Enter the amount that u want to Invest '));
    if (!money) {
        alert(`invalid amount of money '${money}'`)
    }else if (money > user.amount) {
        alert(`invalid amount of money you don't have enough money for that :<(`)
    }else{
        user.amount -= money;
    }
    console.log( user.amount);
    user.Investment.push(money);
    console.log( user.Investment);
}


let datbase = [];

function checkExistenceOfEmail(email) {
    for (let user of datbase) {
        if (user.email === email) {
            return true;
        }
    }
    return false;
}

let customer = {
    name:`youssef`,
    email: 'hellofaradi@',
    password : `hello@01`,
    amount : 15000,
    Investment:[],
};

datbase.push(customer);


let doItAgain = 0;
let name , email,age,password;
function main(){
    while(doItAgain == 0){
    let choice = prompt(`How can I help you?\n1. Sign in\n2. Sign up\n3. Change password\n4. Exit`);
    switch (choice.trim()) {
        //*sign in
        case `sign in`:
            while (true) {            
                let LogInMail = prompt(`Insert your email :<)`);
                if (!checkExistenceOfEmail(LogInMail)) {
                    alert(`This email doesn't exist please try again or sign up.`);
                } else {
                    let user = datbase.find(customer => customer.email === LogInMail);
                    let passcode = prompt('Enter your password :<)');
                    if (user.password !== passcode) {
                        alert(`Incorrect password please try again :<(`);
                    } else {
                        console.log(`Welcome, ${user.name}!`);
                        while(true){
                            console.log(`Your amount is : `+user.amount);
                            let key = prompt(`How can I help you?\n1. log out\n2. Withdraw Money:\n3. Deposit Money\n4. Take a Loan\n5. Invest\n6. History`);
                            switch (key) {
                                case `log out`:
                                    console.log(`see you :<)`);
                                    main();
                                    break;
                                case `withdraw Money`:
                                    withdrawMoney(user);
                                    console.log( user.amount);
                                    break;
                                case `Deposit Money`:
                                    DepositMoney(user);
                                    console.log( user.amount);
                                    break;
                                case `Take a Loan`:
                                    break;
                                case `Invest`:
                                    Invest(user);
                                    break;
                                default:
                                    alert(`enter a valid choice :)`)
                                    break;
                            }

                        }
                        break;
                    }
                }
            }
            doItAgain = 1;
            break;
        //*sign up
        case `sign up`:
            while(true){
                //*name
                while(true){
                    name = prompt(`Insert your name (should be more than 5 characters pleas :<)`);
                    if(name.trim().length<5 ){
                        alert(`make sure that ur name has 5 characters or more`)
                    }else if(specialCharacters(name)){
                        alert(`your name shouldn't contain special character`);
                    }else{
                        name=NameChecker(name);
                        console.log(`Name : ` + name);
                        break;
                    }
                }
                //*email
                while(true){
                    email = prompt(`Insert your email (should be more than 10 characters pleas :<)`);
                    if(email.trim().length<10 ){
                        alert(`make sure that ur email has 10 characters`);
                    }
                    else if(email.includes(' ')){
                        alert(`make sure that ur email has no space on it`);
                    } 
                    else if((email.match(/@/) || []).length == false){
                        alert(`make sure that ur email has @ on it`);
                    }else if(checkExistenceOfEmail(email)){
                        alert(`this'${email}' allready registred in our data base`)
                    }else{
                        email= email.toLowerCase();
                        console.log(`email : ` + email);
                        break;
                    }
                }
                //*age
                while(true){
                    age = prompt(`Insert your age :<)`);
                    if(!age){
                        alert('your age is empty!')
                    }else if(specialNumbers(age)){
                        alert(`The age should contain digits only`);
                    }else if(!(0 < age && age < 100)){
                        alert(`make sure that ur age between 1 nd 2 numbers`);
                    }else{
                        age=age.trim();
                        console.log(`age : ` + age);
                        break;
                    }
                }
                //*password
                while(true){
                    password = prompt(`Insert your password :<)`);
                    if(!password){
                        alert('your password is empty!')
                    }else if(password.includes(' ')){
                        alert(`The password should not contain spaces`);
                    }else if(password.length<7){
                        alert(`make sure that ur password more than & characters`);
                    }else if(!containSpecialCharacters(password)){
                        alert(`make sure that ur password has special character`);
                    }else{
                        password=password.trim();
                        console.log(`password : ` + password);
                        break;
                    }
                }
                while(true){
                    password_confirmed = prompt('Confirm password');
                    if (password_confirmed === password) {
                        break;
                    }
                    alert('password incorrect :<(');
                }
                break;
            }
            let customer = new user(name,email,age,password,password_confirmed);
            datbase.push(customer)
            console.log(datbase)
            doItAgain = 1;
            break;
            //*change password
        case `change password`:
            while (true) {            
                let LogInMail = prompt(`Insert your email :<)`);
                if (!checkExistenceOfEmail(LogInMail)) {
                    alert(`This email doesn't exist please try again or sign up :<(`);
                } else {
                    let user = datbase.find(customer => customer.email === LogInMail);
                    let passcode=checkpassword() ;
                    if(passcode){
                        user.password = passcode;
                        console.log(`password changed successfully :<)`); 
                        console.log(user);
                        break;
                    }else{
                        alert(`This email doesn't exist please try again or sign up :<(`);
                    }
                }
            }
            doItAgain = 1;
            break;
            //*exit
        case `exit`:
            break;
        default:
            alert(`enter a valid choice :)`)
            break;
        }
    }
    console.log(datbase);
}


main();






// * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
// # Logout:
// - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.

// # Withdraw Money:
// - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).

// # Deposit Money:
// - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).

// # Take a Loan:
// - If the user chooses this option, they can take a loan up to 20% of what they already have.
// - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.

// # Invest:
// - If the user chooses this option, they can invest any amount in the bank.
// - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).

// # History:
// - Ability to view the entire transaction history.