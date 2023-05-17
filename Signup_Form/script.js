var count = 0;
let message_space = document.getElementById("validation");
function reg_check_email() {
    let reg_email = /(^[a-zA-Z0-9]+@+[a-z]+[.][a-z]{3}$)|(^[a-zA-Z]+_[a-zA-Z]+@[a-z]+.[a-z]+.[a-z]+.[a-z]{1,}$)/
    let email = document.getElementsByTagName("input")[4].value;
    let validation = document.getElementById("validation-email");
    if(reg_email.test(email)){
       count++;
    }
    else{
       validation.textContent = "Email is invalid. It should follow the format: abc@xyz.com or abc_def@qwe.abc.ab.ab"
    }
}

function reg_check_phoneNumber() {
    let phone = document.getElementsByTagName("input")[1].value;
    let reg_phone = /(\+91|0|)[6-9][0-9]{9}/;
    let validation = document.getElementById("validation-mobilenumber")
    if(!reg_phone.test(phone)){
       validation.textContent = "Invalid mobile-number. It should be of the form +911234567890 or 01234567890 or 1234567890"
    }
    else{
        count++;
    }
}

function reg_check_age() {
    let age = document.getElementsByTagName("input")[2].value;
    let reg_age = /^[1-9][0-9]{0,2}$/
    let validation = document.getElementById("validation-age");
    if(reg_age.test(age)){
        count++;
    }
    else{
        validation.textContent = "Invalid age. Age should be a number."
        
    }
}

function check_Passwd() {
    let validation = document.getElementById("validation-password");
    let strong_password = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
    let pass = document.getElementsByTagName("input")[5].value;
        let cfirm_pass = document.getElementsByTagName("input")[6].value;
    if(!strong_password.test(pass)){
        validation.textContent = "That's not a strong password. A strong password contains atleast one uppercase letter , atleast one symbol , atleast one digit ,minimum length 8"
    }
    else{
        let validation = document.getElementById("validation-confirmpass");
        
        if(pass === cfirm_pass){
            count++;
        }
        else{
            validation.textContent = "Passwords don't match"
        }
    }
   
}

function check_name () {
    let name = document.getElementsByTagName("input")[7].value;
    let reg_name = /^[a-zA-Z\s]{3,}$/
    let validation = document.getElementById("validation-name");

    if(reg_name.test(name)){
        count++;
    }
    else{
       validation.textContent = "Invalid name entered. Name must not contain numbers and should be greater than 1 character"
    }
}

function check_city () {
    let city = document.getElementsByTagName("input")[8].value;
    let reg_name = /^[a-zA-Z]{1,}$/
    let validation = document.getElementById("validation-city");
    if(reg_name.test(city)){
        count++;
    }
    else{
       validation.textContent = "Invalid city name entered. City Name must not contain numbers and should be greater than 1 character"
    }
}
   
function strength_password(){
    
}


function master_check () {
    
    check_Passwd();
    check_city();
    check_name();
    reg_check_email();
    reg_check_age();
    reg_check_phoneNumber();
    if(count == 6){
        alert("Thanks for signing up with us");
    }
}




let email = document.getElementsByTagName("input")[4].value;

