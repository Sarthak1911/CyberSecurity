$(document).ready(function(){

    //Hide all the div initially
    var allDivs = $(".accordian-container > div").hide();

    //On click, display only the clicked div
    $(".accordian-container > a").click(function(e){
        e.preventDefault();
        allDivs.slideUp();
        $(this).next().slideDown(1000);
    });
});