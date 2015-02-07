/*
Assignment 4 : JQuery
Author : Shalini Krishnamoorthi
File Name : validate.js
Version 1 : 05/03/2015
*/

$(document).ready(function(){
	/*Add span after all the fields*/
	$(":text").after("<span>*</span>");

	console.log("entry");
	$("#formValues").hide();
	$("#newButton").hide();

	$('#myform').find('.error').val(' '); 
    
    $('input').click(function() {
  		$(this).removeClass('error').val('');
  		$(this).next().text("");
   	});

	$("#phoneField").keyup(
		function(){
			if(isNaN($("#phoneField").val())){
				$("#phoneField").next().text("Enter a valid phone number");
				isValidEntry = false;
				console.log("entered char for phone number");
				$('#phoneField').addClass('error');
			}
			else{
				if($("#phoneField").val().length === 10){
					$('#phoneField').addClass('accepted');
					$('#phoneField').next().text("");
				}
				else if($("#phoneField").val().length < 10){
					//display error , make its focus as red and 
					$('#phoneField').addClass('error');
					$("#phoneField").next().text("Please enter 10 digits");	
					
				}
				else{
					// make it red . diaply erro and dont let submit to happen
					$('#phoneField').addClass('error');
					$("#phoneField").next().text("Please enter a phone number");	
				}
			}
		}
	);
	$("#nameField").focus();
	$("#myForm").submit(
		function(event){
			isValidEntry = true;
			console.log("submit is pressed");
			
			/*name field is not empty*/
			var name = $("#nameField").val().trim();//remove empty spaces in between
			console.log(name);
			if(name.length >0){
				//got date
				$("#nameField").next().text("");
				console.log("name filled");
			}
			else{
				$("#nameField").next().text("Name cannot be empty");
				console.log("name empty");
				isValidEntry = false;
				$('#nameField').addClass('error');   
			}
			
			/*address field is not empty*/
			var address = $("#addressField").val();
			if($("#addressField").val().length > 0){
				//address is not empty
				console.log("address filled");
				$("#addressField").next().text("");
			}
			else{
				//address is empty
				$("#addressField").next().text("Address cannot be empty");
				isValidEntry = false;
				console.log("address empty");
				$('#addressField').addClass('error');
			}	
			
			/*rewrite the phone number in more readable format*/

			var phone_number = $("#phoneField").val();
			/*re-arrange it */

			if(phone_number.length === 10){			
				var new_number = '('+phone_number.substring(0,3)+') '+phone_number.substring(3,6)+'-'+phone_number.substring(6,10);
				console.log(new_number);
				$("#phoneField").val(new_number);
				
			}
			else if(phone_number.length === 0){
				$("#phoneField").next().text("Phone cannot be empty");
				isValidEntry = false;
				console.log("phone number empty");
				$('#phoneField').addClass('error');	
			}
			else{
				// $("#phoneField").next().text("Phone cannot be empty");
				//isValidEntry = false;
				//console.log("phone number empty");
				//$('#phoneField').addClass('error');	
			}

			/* email field check for @ symbol*/
			/*Regular Expression  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;*/
			var email_data = $("#emailField").val();
			if(email_data !== "")
			{
				var index_at = $("#emailField").val().indexOf("@");	
				console.log(index_at);
				if(index_at > -1){
					/*u have @ symbol, seems correct*/
					$("#emailField").next().text("");
					console.log(" email id is correct");
				}
				else{
					/* u have no @ symbol, show red and display error message*/
					$("#emailField").next().text("Enter a valid e-mail address");
					isValidEntry = false;
					console.log(" email id is wrong");
					$('#emailField').addClass('error');
				}
			}
			else
			{	
				$("#emailField").next().text("Email cannot be empty");
				isValidEntry = false;
				console.log("email empty");
				$('#emailField').addClass('error');
			}
			
			if(isValidEntry === false){
				event.preventDefault();
			}
			else
			{
				event.preventDefault();
				$("#formValues").show();
				$("#formFields").hide();
				$("#nameValue").text(name);
				$("#addressValue").text(address);
				$("#phoneValue").text(new_number);
				$("#emailValue").text(email_data);
				$("#newButton").show();
				$("#submitButton").hide();
			}
		} // function
	);// submit
	$("#newButton").click(function(evt){
					$("#formValues").hide();
					$("#formFields").show();
					$("#submitButton").show();
					$("#newButton").hide();
				});
	
} // function
); // ready