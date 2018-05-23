$(document).ready(function(){
    $("#email").blur(function(){
    	$vEmail = $("#email").val();   	
    	//$("#mensajeEmail").html("<img src="../img/cargando2.gif" /> Por favor espera un momento");
    		$.ajax({
    			type: "POST",
        		dataType: 'html',
        		url: "../php/consultaEmail.php",
        		//data: {email : $('#email').val()},
        		data: "email="+$vEmail,
        		success: function(resp){
            		$('#mensajeEmail').html(resp);
            		if(resp){
            		//$("#dajax").html("existe");
            		$("#email").val("");
            		}
            	}
    		});
    		
	});
});

