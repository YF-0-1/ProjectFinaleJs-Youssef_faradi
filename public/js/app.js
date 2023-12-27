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

function containSpecialCharacters(password){
    let specialCharacters = `0123456789!"#%&$'()+*,-./;:<=>?@[\\]^_'\`{|}~♂♀'`;
    for (let special of specialCharacters) {
        if (password.includes(special)) {
            return true;
        }
    }
    return false;
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
};

datbase.push(customer);


let doItAgain = 0;
let name , email,age,password;
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
                        break
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