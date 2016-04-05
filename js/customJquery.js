$(document).ready(function(){
	$('#username').focus();
	$('#btnProceed').click(function(){
		var uName = $('#username').val().toLowerCase();
		var password = $('#password').val();
		if(uName == 'test@gmail.com' && password =='test123')
		{
			window.location.href = "crud.html";
		}
		else
		{
			$('.errMsg').css({"display":"block","margin-top":"5px"});
			return false;
		}
	});
});