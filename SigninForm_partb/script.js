const request =  (async () => {


    let email  = document.getElementById("email").value;
    let regex_email = /^[a-zA-Z0-9]+((@[a-zA-Z0-9]+.[a-z]+)|.[a-z]+@[a-zA-Z0-9]+.[a-z]+$)/
    if(!regex_email.test(email)){
        let textdiv = document.getElementById("validation");
        textdiv.textContent = "The email is invalid. It should be of the form abc@gmail.com or abc.def@abc.bc";
    }
    else{
        let pass = document.getElementById("pass-1").value;
        let strong_password = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/;
        if(strong_password.test(pass)){
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
            let textdiv = document.getElementById("validation");
            textdiv.textContent = "That's not a strong password. A strong password contains atleast one uppercase letter , atleast one symbol , atleast one digit ,minimum length 8";
        }
        
    }
    
});


