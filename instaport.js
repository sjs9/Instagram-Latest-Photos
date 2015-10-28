
var recentUploadsJson = null;
var loadCount = 0;

$(function () {
    loadRecentInstagramUploads();
    $(window).scroll(myInfiniteScrollFunction);
});

function loadRecentInstagramUploads() {
    $.ajax({
        url: "https://api.instagram.com/v1/tags/selfie/media/recent/?client_id=5f9365e9f1054aa991726d731c65aa02",
        dataType: "jsonp"
    }).done(function (data) {
        recentUploadsJson = data;
        renderImages();
    });
}

function myInfiniteScrollFunction() {
    console.log('scrolling..');
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        console.log("bottom!");
        loadRecentInstagramUploads();
    }
}

function renderImages() {
    var html = "";
    for (var i = 0; i < recentUploadsJson["data"].length; i++) {
        html += "<div><img src='" + recentUploadsJson["data"][i]["images"]["low_resolution"]["url"] + "' ></div>";
    }
    $("#deals").append(html);
};

