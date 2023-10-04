//Client application sending request to the API endpoint

const url = "http://localhost:5000/property";
const submitButton = document.getElementById("submit");
const titleField = document.getElementById("title");
const locationField = document.getElementById("location");

let data = "";

//If user clicks on sendButton, send request to the API 
submitButton.addEventListener("click",( e)=>{
    e.preventDefault();

    if(titleField.value=="" || locationField.value==""){
        alert("Cannot send empty values");
    }else{

    const data = {
        title : titleField.value,
        location : locationField.value
    };
    
    fetch(url,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "token" : "abc"
        },
        body: JSON.stringify(data)
        
    })
    .then((response)=>{
        return response.json();
     
    }).then((responseData)=>{
        
      console.log(responseData);
  
        
    }).catch(err=>{
        console.log(err);
    });


}

})






    


