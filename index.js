
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorFname= document.getElementById("error-fname");
const errorLname= document.getElementById("error-lname");
const errorEmail= document.getElementById("error-email");
const errorPassword= document.getElementById("error-password");

/* inputs array and error inputs array */
const inputs = [fname, lname, email, password];
const errorInputs =[errorFname, errorLname, errorEmail, errorPassword];

/* remove all error messages and error inputs if existed */
function removeErrors(){
    
    for(let i=0; i<inputs.length; i++){
        inputs[i].classList.remove("error-input");
    }
    for(let i=0; i<errorInputs.length; i++){
        errorInputs[i].innerHTML="";
    }
}

/* check whether all inputs are correctly filled out */
function checkInputs(){
    let result =true;
    for(let i=0; i<inputs.length; i++){  //loop through all inputs 
        if(inputs[i].value==="" | inputs[i].value ===null){  //check whether the current input is valid
            result = false;
            inputs[i].classList.add("error-input");   //add error input to class list
            
            if(inputs[i]===email){  //if it's email
                email.placeholder="email@example/com";
                errorEmail.innerHTML = "Looks like this is not an email";
                
            }else {  //otherwise
                errorInputs[i].innerHTML = inputs[i].placeholder+" cannot be empty";
                inputs[i].placeholder="";
               
            }
           
        }
    }


    return result;

}

function resetPlaceholders() {
    //reset placeholder

    fname.placeholder="First Name";
    lname.placeholder="Last Name";
    email.placeholder="Email Address";
    password.placeholder="Password";

    

}


 function clearInputs(){
    //clear out form after submitting successfully, set value=""
    for(let i=0; i<inputs.length; i++){
        inputs[i].value="";
    }
    alert("Congratulations! You have successfully claimed your free trial!")
}

/* when submit button is clicked */

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    // reset all inputs fields
    resetPlaceholders();
    
    //remove all errors previously
    removeErrors();

    //check all input fields
    if(checkInputs()){
        clearInputs();
    }
})