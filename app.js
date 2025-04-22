function submitdata(){

    // for name 

    let name1 = document.getElementById("name");
    console.log(name1);
    console.log(name1.value)
    let finalname = name1.value;

    // for email

    let email = document.getElementById("email1");
    console.log(email);
    console.log(email.value);
    let finalemail = email.value;

    // for ph

    let ph = document.getElementById("ph");
    console.log(ph);
    console.log(ph.value);
    let finalph = ph.value;

    // for State

    let state = document.getElementById("State");
    console.log(state);
    console.log(state.value);  
    let finalstate = state.value;
    
    // for checkbox

    let checks = document.getElementsByName("checkbox");
    console.log(checks);

    let arr=[];
    for(let val of checks){
        if(val.checked){
            arr.push(val.value)
        }
    }
    console.log(arr);


    // for print 

    console.log(finalname);
    console.log(finalemail);
    console.log(finalph);
    console.log(finalstate);
    console.log(arr.toString());


    
if (name1.value===""){
    setError(name1,"Name is Empty")
}
else{
    setSuccess(name1)
}

if (email1.value===""){
    setError(email1,"Email is Empty")
}
else{
    setSuccess(email1)
}

if (ph.value===""){
    setError(ph,"Phonenumber is Empty")
}
else{
    setSuccess(ph)
}
if (checks.value===""){
    setError(checks,"Phonenumber is Empty")
}
else{
    setSuccess(checks)
}


}
function setError(element,msg){
    let parents = element.parentElement;
    let resfinal = parents.querySelector(".errorname");
    resfinal.innerText=msg;
}
function setSuccess(element){
    let parents = element.parentElement;
    let resfinal = parents.querySelector(".errorname");
    resfinal.innerText=" ";
}