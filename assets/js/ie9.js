$(document).ready(function() {
	
	$('#contact-form input,#contact-form textarea').each(function() {
		$(this).val($(this).attr('placeholder'));
	});
});