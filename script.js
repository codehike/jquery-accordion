$(document).ready(function(){
	$('#accordion > div').hide();
	$('#accordion > h3').click(function(){
		var contentDiv = $(this).next();
		if (contentDiv.is(":visible")) {
			contentDiv.slideUp();
		} else {
			$('#accordion > div').slideUp();
			contentDiv.slideDown();
		}
	});
});