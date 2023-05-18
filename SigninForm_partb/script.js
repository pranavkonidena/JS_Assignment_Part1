const request =  (async () => {
    
    if(flag == 1){
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass-1").value;
        const options = {
            method : "POST",
            body : JSON.stringify({
                email : email,
                password : pass
            }),
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
           };
           try{
            const response = await fetch("https://reqres.in/api/login" , options);
            const data = await response.json();
            console.log(data);
            let textdiv = document.getElementById("validation");
            if(data.error != undefined){
                textdiv.textContent = data.error;
            }
            else{
                textdiv.textContent = "Login Sucessfull";
            }
           }
           catch(e){
            console.log(e);
           }
    }
    else{
        alert("Please enter all the required fields before logging in");
    } 
});

let flag = 0;
let msg_container_email = document.getElementById("validation-email");
let msg_container_password = document.getElementById("validation-password");
function reg_check_email () {
    let regex_email = /^^[a-zA-Z0-9]+((@[a-z]{4,}\.[a-z]{3})|(\.[a-z]{2,}@reqres.in))$/
    const email = document.getElementById("email").value;
    if(regex_email.test(email)){
        msg_container_email.textContent = " ";
        flag = 1;
    }
    else{
        msg_container_email.textContent = "The email is invalid. It should be of the form abc@gmail.com or abc.def@reqres.in";
        flag = 0;
    }
}

function reg_check_password () {
    let strong_password = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
    const pass = document.getElementById("pass-1").value;
    if(strong_password.test(pass)){
        msg_container_password.textContent = " ";
        flag = 1;
    }
    else{
        msg_container_password.textContent = "That's not a strong password. A strong password contains atleast one uppercase letter , atleast one symbol , atleast one digit ,minimum length 8";
        flag = 0;
    }
}