$(document).ready(function(){
    $(window).scroll(function(){
        var scrollPos = window.scrollY;
        if (scrollPos > 500){
            $("#header").addClass("headerAnim");
        }
        else {
            $("#header").removeClass("headerAnim");
        }
    })
})