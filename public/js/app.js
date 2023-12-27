class user {
    constructor(name,email,age,password,password_confirmed){
        this.name=name;
        this.email=email;
        this.age=age;
        this.password=password;
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




//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.

let datbase = [];

function checkExistenceOfEmail(email) {
    for (let user of datbase) {
        if (user.email === email) {
            return true;
        }
    }
    return false;
}

// let customer = {
//     email: 'hellofaradi@' 
// };

// datbase.push(customer);


let doItAgain = 0;
while(doItAgain == 0){
    let choice = prompt(`How can i help u Sir ? \n if u want to sign in write sign in .\n if u want to sign up write sign up .\n if u want to change password write change password .\n if you want to exist write exist .`);
    switch (choice.trim()) {
        case `sign in`:
            console.log(`hello`)
            doItAgain = 1;
            break;
        case `sign up`:
            let name , email,age,password;
            while(true){
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
            
                break;
            }
            let customer = new user(name,email,age);
            datbase.push(customer)
            console.log(datbase)
            doItAgain = 1;
            break;
        case `change password`:
            doItAgain = 1;
            break;
        case `exist`:
            break;
        default:
            alert(`enter a valid choice :)`)
            break;
    }
}