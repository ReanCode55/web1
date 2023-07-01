
$(document).ready(function() {
    //Init the carousel
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoHeight: true,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        center: true,
        loop:true,
        margin:10,
        items:1.5
    });

    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 3000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }
});



// show and hide menu for mobile
function openNav() {
    document.getElementById("myNav").style.width = "45%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}