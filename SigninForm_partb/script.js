

const request =  (async () => {
    let email  = document.getElementById("email").value;
let pass = document.getElementById("pass-1").value;
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
   

})