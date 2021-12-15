function registration()
	{

		var name= document.getElementById("t1").value;
		var email= document.getElementById("t2").value;
		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("t4").value;			
		var cpwd= document.getElementById("t5").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			text = "Please Enter your name" ;
		}
		else if(!letters.test(name))
		{
			text = "Name field required only alphabet characters" ;
		}
		else if(email=='')
		{
			text =  "Please enter your user email id";
		}
		else if (!filter.test(email))
		{
			text = "Invalid email";
		}
		else if(uname=='')
		{
			text = "Please enter the user name. ";
		}
		else if(!letters.test(uname))
		{
			text = "User name field required only alphabet characters " ;
		}
		else if(pwd=='')
		{
			text = "Please enter Password";
		}
		else if(cpwd=='')
		{
			text = "Enter Confirm Password";
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pwd != cpwd)
		{
			text = "Password not Matched";
		}
		else if(document.getElementById("t5").value.length < 6)
		{
			text = "Password minimum length is 6";
		}
		else if(document.getElementById("t5").value.length > 12)
		{
			text = "Password max length is 12";
		}
		else
		{				                            
               text = "Thank You for Login.";
			   // Redirecting to other page or webste code. 
			   window.location = "http://127.0.0.1:5502/gujarat.html"; 
		}
		document.getElementById("demo").innerHTML = text;
	}
	function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
		document.getElementById("t3").value="";
		document.getElementById("t4").value="";
		document.getElementById("t5").value="";
	}