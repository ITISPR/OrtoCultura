$('img#imgCollapse.nav-button').attr("style", "display: block !important");
$('ul.tabs.tabs-transparent').attr('style', 'display: none !important');
$('nav.nav-extended.under-nav').attr('style', 'display: none !important');

$("#btnLogin").click(function(){
    $("#tabOrti").load("orto.html #sezione_orto", function () {
        $.getScript("js/orto.js");
    });
});