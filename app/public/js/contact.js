$(document).ready(function() {
	var name = "";
	var email = "";
	var message = "";
	$("h2").animate({
		opacity: "1.0"
	}, 500, "swing");
	$("label").animate({
		opacity: "1.0"
	}, 500, "swing");
	$(".form-control").animate({
		width: "100%"
	}, 850, "swing");
	$(".form-control").hover(function() {
		$(this).animate({
			borderBottomColor: "#f9b756",
			borderWidth: "3px"
		}, 100);
	}, function() {
		$(this).animate({
			borderBottomColor: "#c7cfdd",
			borderWidth: "1px"
		}, 100);
	});
	$("#sendEmail").on("click", function() {
		var currentURL = window.location.origin;
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		if(name == "" || email == "" || message == "")
		{
			$("#result").text("Please fill all fields");
			$("#result").animate({
				opacity: "1.0"
			}, 150);
		}
		else
		{
			$.ajax({
				url: currentURL + "/email",
				type: "POST",
				data: {
					name: name,
					email: email,
					message: message
				},
				success: function(response) {
					$("#result").text("Message sent");
					$("#result").animate({
						opacity: "1.0"
					}, 150);
				},
				error: function(xhr) {
					$("#result").text("An error has occured please try again later");
					$("#result").animate({
						opacity: "1.0"
					}, 150);
					console.log(xhr);
				}
			});
		}
	});
	$('.navicon').on('click', function(){
    	$('.mainNavDropDown').slideToggle(500);
   	});
});