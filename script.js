$(document).ready(function(){
	$('#accordion > div').hide();
	$('#accordion > h3').each(function(index, item){		
		$(item).click(function(){
			var contentDiv = $(this).next();
			if (contentDiv.is(":visible")) {
				contentDiv.slideUp();
			} else {
				$('#accordion > div').slideUp();
				contentDiv.slideDown();
			}
		});
	});
});