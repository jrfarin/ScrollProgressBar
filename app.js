// When the user scrolls the page, execute the watchProgress function
window.onscroll = function() {watchProgress()};

function watchProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //console.log(winScroll);

    // Total Height Webpage - Client Viewport Height
    let scrHeight = document.documentElement.scrollHeight;
    let cliHeight = document.documentElement.clientHeight
    //console.log(scrHeight);
    //console.log(cliHeight);

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(height);

    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
    //console.log(scrolled);
}