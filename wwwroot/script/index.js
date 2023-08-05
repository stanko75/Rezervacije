﻿// jQuery code to handle form submission
$(document).ready(function () {
    $("#novaRezervacija").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

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
    });

    // Function to post JSON data to the server's SomePost method
    function postToServer(data) {
        // Replace the URL below with the actual endpoint of your server's SomePost method
        //const url = "https://localhost:7158/api/Rezervacija/SacuvajRezervaciju";
        const url = "https://rezervacijejevtic.azurewebsites.net/api/Rezervacija/SacuvajRezervaciju";

        // Make a POST request to the server
        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
            data: data,
            success: function (response) {
                // Handle the response from the server if needed
                console.log("Response from server:", response);
            },
            error: function (error) {
                // Handle any errors that occurred during the request
                console.error("Error:", error);
            }
        });
    }
});