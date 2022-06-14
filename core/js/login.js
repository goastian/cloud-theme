$(document).on('click','#lost-password', function(){
	$('.banner-content').hide('slow');
	$('.banner-right-align').addClass('width0');
	$('.lines').hide();
	$('.v-align').addClass('warning-messsage');
	$('footer').addClass('forgotpass-footer');
});
$(document).on('click','.lost-password-container a', function(){
	$('.banner-right-align').removeClass('width0');
	$('.v-align').removeClass('warning-messsage');
	$('footer').removeClass('forgotpass-footer');
	$('.lines').show('slow');
	$('.banner-content').show('slow');
});
