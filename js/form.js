$(function() {
   $('#btn-submit').click(sendForm); 
});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/roma3110@ukr.net", 
        method: "POST",
        data: {
            clientName: $('#client-name').val(),
            clientEmail: $('#client-email').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    }).done(function() {
        $('#message').html('Thank you for contacting us!');    
    });
}