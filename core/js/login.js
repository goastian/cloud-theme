$(document).on('click','#lost-password', function(){
	$('.banner-right-align').hide(500);
	$('.v-align').addClass('warning-messsage');
	$(".v-align").fadeOut('fast').delay(300).fadeIn('500');
	$('.fp-label').fadeIn(); $('.sign-label').fadeOut('fast');
});
$(document).on('click','.lost-password-container a', function(){
	$('.banner-right-align').show(500);
	$('.v-align').removeClass('warning-messsage');
	$(".v-align").fadeOut('fast').delay(300).fadeIn('500');
	$('.fp-label').fadeOut('fast'); $('.sign-label').fadeIn();
});
