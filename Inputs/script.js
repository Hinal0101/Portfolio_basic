function valid(){
    var re_name=/^[A-Za-z]+(\s)+[A-Za-z]+$/;
    var re_email=/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
    var re_contact=/^(\d){10,11}$/;
    var re_msg=/^(\w)+$/;
    var name=document.getElementById("nm").value;

    if(name==""){
        alert("Name cannot be blank");
        return false;
    }

    if(!re_name.test(name)){
        alert("name has to be a combination of fname and lname");
        return false;
    }

    var email=document.getElementById("em").value;
    if(email==""){
        alert("Email cannot be blank");
        return false;
    }

    if(!re_email.test(email)){
        alert("Email should have proper validation");
        return false;
    }

    var cont=document.getElementById("ct").value;

    if(cont==""){
        alert("Contact cannot be blank");
    }

    if(!re_contact.test(cont)){
        alert("Contact has to be in digit between 10 to 11");
        return false;
    }

    var msg=document.getElementById("msg").value;
    if(msg==""){
        alert("Message cannot be blank");
        return false;
    }

    if(!re_msg.test(msg)){
        alert("Message has to alphanumeric");
        return false;
    }
}