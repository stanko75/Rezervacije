// jQuery code to handle form submission
$(document).ready(function () {

    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit',
            event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault(); // Prevent the default form submission behavior
                    showPreloader();
                    // Create a JSON object from the form data
                    const formData = {
                        naziv: $("#naziv").val(),
                        telefon: $("#telefon").val(),
                        mestoRezervacije: $("#mestoRezervacije").val()
                    };

                    // Convert the JSON object to a JSON string
                    const jsonData = JSON.stringify(formData);

                    // Send the JSON data to the server's SomePost method
                    postToServer(jsonData);
                }

                form.classList.add('was-validated');
            },
            false);
    });

    // Function to post JSON data to the server's SomePost method

    function postToServer(data) {
        // Replace the URL below with the actual endpoint of your server's SomePost method
        //const url = "";
        const url = "";

        // Make a POST request to the server
        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
            data: data,
            success: function (response) {
                // Handle the response from the server if needed
                window.location.href = 'hvalaNaRezervaciji.html';
            },
            error: function (error) {
                // Handle any errors that occurred during the request
                window.location.href = 'greska.html';
            },
            complete: function () {
                hidePreloader();
            }
        });
    }
});

function showPreloader() {
    $.ajax({
        url: '../smiley-preloader.html',
        method: 'GET',
        dataType: 'html',
        success: function (preloaderHtml) {
            // Append the preloader HTML as an overlay to the body
            //$('body').append('<div class="preloader-overlay">' + preloaderHtml + '</div>');
            $('body').html(preloaderHtml);
        },
        error: function () {
            console.error('Failed to load the preloader.');
        }
    });
}

function hidePreloader() {
    $('.preloader-overlay').fadeOut(function () {
        $(this).remove();
    });
}