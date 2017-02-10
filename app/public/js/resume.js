$(document).ready(function() {
	$("#outerImageDiv").animate({
		opacity: "1.0",
		marginLeft: "0px"
	}, 1000, "swing");
	$(".info").animate({
		opacity: "1.0",
	}, 1000, "swing");
	$("#outerResumeDiv").animate({
		opacity: "1.0",
		marginTop: "0px"
	}, 1000, "swing");
	$("#viewPDF").on("click", function() {
		window.open('images/Menu.pdf');
	});
	$('.navicon').on('click', function(){
    	$('.mainNavDropDown').slideToggle(500);
   	});
});