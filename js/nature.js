function validation() {
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var place = document.getElementById('placename').value;
    var email = document.getElementById('emailadd').value;
    var experience = document.getElementById('userexperience').value;

    if(fname == "" || fname == null) {
        
        document.getElementById('firname').innerHTML = "Please enter First Name ";
        
        return false;
    }

    if(!isNaN(fname)) {
        document.getElementById('firname').innerHTML = "First Name should be in character ";
               return false;
    }

    if(lname == "" || lname == null) {
        document.getElementById('laname').innerHTML = "Please enter First Name ";
       
        return false;
    }

    if(!isNaN(fname)) {
        document.getElementById('larname').innerHTML = "Last Name should be in character";
       
        return false;
    }


    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");

    if(email == "") {
        
        document.getElementById('emailaddr').innerHTML = "Please enter email address";
      
        return false;
    }

    if(at<1 || dot<at+2 || dot+2>=email.length) {
        
        document.getElementById('emailaddr').innerHTML = "Not a valid email address";
        
        return false;
    }


    
    if(place == "" || place == null) {
        document.getElementById('plname').innerHTML = "Please enter Place you visited";
       
        return false;
    }

    if(!isNaN(place)) {
        document.getElementById('plname').innerHTML = "Place Name should be in character";
        
        return false;
    }


    if(experience == "" || experience == null) {
        document.getElementById('userexp').innerHTML = "Please enter your experinece of the place that you visited.";
       
        return false;
    }

}

