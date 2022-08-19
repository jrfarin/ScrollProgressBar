// When the user scrolls the page, execute the watchProgress function
window.onscroll = function() {watchProgress()};

function watchProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //console.log(winScroll);

    // Total Height Webpage - Client Viewport Height
    var scrHeight = document.documentElement.scrollHeight;
    var cliHeight = document.documentElement.clientHeight
    //console.log(scrHeight);
    //console.log(cliHeight);

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(height);

    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
    //console.log(scrolled);
}