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
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass-1").value;
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
})

let msg_container = document.getElementById("validation");

