// Validation Part

// let count = 0;
// let error_string = "";

// function reg_check_email() {
//     let reg_email = //
//     let email = document.getElementsByTagName("input")[0].value;
//     if(reg_email.test(email)){
//        count++;
//     }
//     else{
//         error_string += "Invalid email "
//     }
// }


// function master_check () {
    
    
    
//     reg_check_email();
//     if(count != 2){
//         alert(error_string);
//     }
// }

//API Post Part

const post = (() => {
    let regex_email = /^[a-zA-Z0-9]+((@[a-zA-Z0-9]+.[a-z]+)|.[a-z]+@[a-zA-Z0-9]+.[a-z]+$)/
    const email = document.getElementById("email").value;
    if(!regex_email.test(email)){
        msg_container.textContent = "The email is invalid. It should be of the form abc@gmail.com or abc.def@abc.bc";
    }
    else{
        let strong_password = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
        const pass = document.getElementById("pass-1").value;
        if(!strong_password.test(pass)){
            msg_container.textContent = "That's not a strong password. A strong password contains atleast one uppercase letter , atleast one symbol , atleast one digit ,minimum length 8";
        }
        else{
            console.log(email);
            console.log(pass);
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
    
    }   
    
})

let msg_container = document.getElementById("validation");

