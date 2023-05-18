//API Post Part

const post = (() => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass-1").value;
    let msg_container = document.getElementById("validation");
    if(flag == 1){
        let body = {
            email,
            pass
        };
        console.log(JSON.stringify(body));
        fetch("https://reqres.in/api/login" , {
        method : "POST",
        body: JSON.stringify({email : email, password : pass}),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
        .then(function (response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            if(data.error != undefined){
                msg_container.textContent = data.error;
            }
            else{
                msg_container.textContent = "Login Succesfull";
            }
            
        })
    }
    else{
        alert("You need to enter the required details before logging in!");
    }
    
    
    }   
    
)

let msg_container_email = document.getElementById("validation-email");
let msg_container_password = document.getElementById("validation-password");

// Validation part
let flag = 0;
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