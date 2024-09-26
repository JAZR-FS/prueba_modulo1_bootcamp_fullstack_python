$(document).ready(function(){
    $('#contact_me').click(function(event){
        event.preventDefault();
        $('#new_content').load('form_contact.html');
        $('#main_content').hide();
    });

    $('#skills').click(function(event){
        event.preventDefault();
        $('#new_content').load('habilidades.html');
        $('#main_content').hide();
    });

    $('#proyects').click(function(event){
        event.preventDefault();
        $('#new_content').load('proyectos.html');
        $('#main_content').hide();
    });

    $('#start-page').click(function(event){
        event.preventDefault();
        location.reload();
    });
});

