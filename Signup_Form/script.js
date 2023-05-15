

let count = 0;
let error_string = "";

function reg_check_email() {
    let reg_email = /(^[a-zA-Z0-9]+@+[a-z]+[.][a-z]{3}$)|(^[a-zA-Z]+_[a-zA-Z]+@[a-z]+.[a-z]+.[a-z]{2,}$)/
    let email = document.getElementsByTagName("input")[4].value;
    if(reg_email.test(email)){
       count++;
    }
    else{
        error_string += "Invalid email "
    }
}

function reg_check_phoneNumber() {
    let phone = document.getElementsByTagName("input")[1].value;
    let reg_phone = /(\+91|0|)[6-9][0-9]{9}/;

    if(!reg_phone.test(phone)){
        error_string += "Invalid mobile-number "
    }
    else{
        count++;
    }
}

function reg_check_age() {
    let age = document.getElementsByTagName("input")[2].value;
    let reg_age = /^[1-9][0-9]{0,2}$/

    if(reg_age.test(age)){
        count++;
    }
    else{
        error_string += "Invalid age "
    }
}

function check_Passwd() {
    let pass = document.getElementsByTagName("input")[5].value;
    let cfirm_pass = document.getElementsByTagName("input")[6].value;
    if(pass === cfirm_pass){
        count++;
    }
    else{
        error_string += "Passwords don't match "
    }
}

function check_name () {
    let name = document.getElementsByTagName("input")[7].value;
    let reg_name = /^[a-zA-Z\s]{3,}$/
    if(reg_name.test(name)){
        count++;
    }
    else{
       error_string += "Name is invalid "
    }
}

function check_city () {
    let city = document.getElementsByTagName("input")[8].value;
    let reg_name = /^[a-zA-Z]{1,}$/
    if(reg_name.test(city)){
        count++;
    }
    else{
       error_string += "City-name is invalid "
    }
}

function master_check () {
    
    
    reg_check_phoneNumber();
    reg_check_age();
    reg_check_email();
    check_name();
    check_Passwd();
    check_city();
   
    if(count == 6){
        alert("Thanks for signing up with us");
    }
    else{
        alert(error_string);
    }
}

