//const url = "https://localhost:7158/api/Rezervacija/PrikaziRezervacije";
const url = "https://rezervacijejevtic.azurewebsites.net/api/Rezervacija/PrikaziRezervacije";

showPreloader();

$.ajax({
    url: url,
    type: "GET",
    dataType: 'json',
    success: function (response) {
        // Handle the response from the server if needed
        hidePreloader();
        displayGrid(response);
    },
    error: function (error) {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
        hidePreloader();
    },
    complete: function () {
        hidePreloader();
    }
});

function generateGridItem(item) {
    return `

    <div class="row mb-3 text-center">
        <div class="col-4 themed-grid-col">
            ${item.naziv}
        </div>
        <div class="col-4 themed-grid-col">
            ${item.telefon}
        </div>
        <div class="col-4 themed-grid-col">
            ${item.mestoRezervacije}
        </div>
    </div>
`;
}

function displayGrid(data) {
    var gridContainer = $("#gridContainer");
    gridContainer.empty(); // Clear existing content

    for (var i = 0; i < data.length; i++) {
        var itemHtml = generateGridItem(data[i]);
        gridContainer.append(itemHtml);
    }
}

function showPreloader() {
    $.ajax({
        url: '../smiley-preloader.html',
        method: 'GET',
        dataType: 'html',
        success: function (preloaderHtml) {
            // Append the preloader HTML as an overlay to the body
            $('body').append('<div class="preloader-overlay">' + preloaderHtml + '</div>');
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