$(document).on('click','#lost-password', function(){
	$('.banner-content').hide('fast');
	$('.banner-right-align').addClass('width0');
	$('.lines').hide();
	$('.v-align').addClass('warning-messsage');
});
$(document).on('click','.lost-password-container a', function(){
	$('.banner-right-align').removeClass('width0');
	$('.v-align').removeClass('warning-messsage');
	$('.lines').show('slow');
	$('.banner-content').show('slow');
});
