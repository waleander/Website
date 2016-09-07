$(function(){
  
  
  // CONTACT FORM 
  if($('#contactForm').length){
  	  
	    // PROCESSING
	  
		$("#send-contact").bind("click",function(){
			
				// Contact Name
				var c_name = $("input#thename").val();
				if(c_name  == "" || c_name == "Full Name"){
					$("input#thename").focus();
					$("input#thename").css({"border":"1px solid #f9710b"});
					 error_message();
					return false;
				}else{
				    $("input#thename").css({"border":"1px solid #fff"});
				}
				
				// Contact email
				var c_email = $("input#theemail").val();
				if(c_email  == "" || c_email == "Email"){
					$("input#theemail").focus();
					$("input#theemail").css({"border":"1px solid #f9710b"});
					 error_message();
					return false;
				}else{
					 $("input#theemail").css({"border":"1px solid #fff"});
				}
				// Validate correct email pattern
				if(!validEmail2(c_email)){
					$("input#theemail").focus();
					$("input#theemail").css({"border":"1px solid #f9710b"});
					 error_message();
					return false;
				}else{
					$("input#theemail").css({"border":"1px solid #fff"});
				}
				
				// Contact phone
				var c_telephone = $("input#thephone").val();
				  
				
				// Contact message
				var c_message = $("textarea#themessage").val();
				if(c_message == "" || c_message == null || c_message == "Message"){
					$("textarea#themessage").focus();
					$("textarea#themessage").css({"border":"1px solid #f9710b"});
					 error_message();
					return false;
				}else{
					 $("textarea#themessage").css({"border":"1px solid #fff"});
				}
				
				
				
				
				 
			  function error_message(){
				 
				  $("#contact_form_error").html("<p style='color:#f9710b; background:#fff; padding-left:10px; font-weight:bold;'>Please fill all fields correctly.</p>");
					
			   } 

			   // Replace <br />
			   			   
 			   var contacttring = 'c_name='+ c_name +'&c_email='+ c_email +'&c_telephone='+c_telephone+'&c_message='+ c_message; 
				
			// AJAX Call    
		    $.ajax({
				   type: "POST",
				   url: "lib/contact.php",
				   data: contacttring,
				   success: function(){
				   	
				   	 //$('.contactform_elements').hide();
				   	 // $('.contactform_elements').delay(6000).fadeIn();
				   	 
				   	 //$(".contactform_elements").hide().delay(5000).fadeIn();
				   	 
				   	 $(".contactform_elements").toggleClass('hideElement');
				   	 
				   	 
	  
				   //	$('.contact_form').css('height', '120px');

   			 			// Animation complete
   			 			$(".contactFormWrap h2").html("Status:");
						$(".contactFormWrap").html("<div id='message-ajax'></div>").hide().fadeIn(600, function(){
							$("#contact_form_error").html('');
							$("#message-ajax").html("<h3 style='color:#22cc66; text-align:center; text-transform:none;' class=''> Thank you! We have received your message.</h3><p style='color:#fff; text-align:center; font-weight:bold;'>We will get intouch shortly.</p>"); 
							$(".contactform_elements").delay(5000).fadeIn();
							$("input#thename").val("");
							$("input#theemail").val("");
							$("input#thetelephone").val("");
							$("textarea#themessage").val("");
						});				   
					
				  } // success
				  
			}); // end ajax*/
			
			return false;	
		
	   }); // End Contact 
	   
	 } // If contact exits
	 
	 
	 
	 
	 	
		/* ////////// Validate Telephone Number ////////////// */
		
		function validateTel(value){		
			return (value.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}(\s*(ext|x)\s*\.?:?\s*([0-9]+))?$/)); 
		}
		
		/*  ////////// EMAIl VALIDATE  ////////// */
		
		function validEmail2(emailNewsL){
			
			var invalidChars = "/:,;";
			
			if(emailNewsL == ""){
				return false;
			}
			
			for(var k=0; k<invalidChars.length; k++){
				var badChar = invalidChars.charAt(k);
				if(emailNewsL.indexOf(badChar) > -1){
					return false;
				}
			}
			
			var atPos = emailNewsL.indexOf("@",1);
			// if no @ sign found return false
			if(atPos == -1){
				return false;
			}
			
			// if more than 1 @ sign found return false
			if(emailNewsL.indexOf("@", atPos+1) != -1){
				return false;
			}
			
			var periodPos = emailNewsL.indexOf(".", atPos);
			// if no period found return false;
			if(periodPos == -1){
				return false;
			}
			
			if(periodPos+3 > emailNewsL.length){
				return false;
			}
			return true;
		} // end validateEmail2
 
	 
});
