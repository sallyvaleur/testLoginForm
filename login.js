



var attempt = 3; //variable to count number of attempts.


//validate function that executes on click of login button.
function validate() {	
	var password = document.getElementById("password").value;
	
	if (password == "123")
	{
		
		window.location = "success.html"; //redirecting to other page
		return false;
	}
	
	else{
		attempt --; //decrementing by one.
		alert("You have left "+attempt+" attempt;");
		//disabling fields after 3 attempts.
		if (attempt == 0)
		{
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
		}
	}
}
