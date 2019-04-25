/*
Creator: Derek Moore
Date Created: 3/25/19
Date Last Modified: 3/25/19
*/

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length; 
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function validateForm() {
	clearErrors();
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var info = document.forms["contactForm"]["info"].value;
	if (name == "") {
			alert("Name is required.");
			document.forms["contactForm"]["name"].parentElement.className = "form-group has-error";
			document.forms["contactForm"]["name"].focus();
			return false;
	}
	if (email == "") {
			alert("Email is required.");
			document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
			document.forms["contactForm"]["email"].focus();
			return false;
	}
	if (info == "") {
			alert("Please provide some information on what we can help you with.");
			document.forms["contactForm"]["info"].parentElement.className = "form-group has-error";
			document.forms["contactForm"]["info"].focus();
			return false;
	} else {
		alert("Thank you. Someone from Robo Burgers will be in contact with you soon.");
	}
}	
