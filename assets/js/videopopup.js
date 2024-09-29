$(document).ready(function() {
    $("#playButton").on('click', function(e) {
        e.preventDefault();
        $("#videoPopup").show();
    });

    // Close the popup and stop the video
    $("#closeButton, #videoPopup").on('click', function(event) {
        if (!$(event.target).closest('#videoIframe').length) {
            $("#videoPopup").hide();
            var iframe = $('#videoIframe').attr("src");
            $('#videoIframe').attr("src", iframe); // This effectively reloads the iframe, stopping the video
        }
    });
});