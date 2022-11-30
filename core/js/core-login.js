$(document).on('click','#lost-password', function(){
	if(window.innerWidth > 1050){
		$('.banner-content').hide('slow');
		$('.have-an-account').hide('slow');
		$('.banner-right-align').addClass('width0');
		$('.lines').hide();
		$('.v-align').addClass('warning-messsage');
		$('footer').addClass('forgotpass-footer');
	}
});
$(document).on('click','.lost-password-container a', function(){
	if(window.innerWidth > 1050){
		$('.banner-right-align').removeClass('width0');
		$('.v-align').removeClass('warning-messsage');
		$('footer').removeClass('forgotpass-footer');
		$('.lines').show('slow');
		$('.banner-content').show('slow');
		$('.have-an-account').show('slow');
	}
});
