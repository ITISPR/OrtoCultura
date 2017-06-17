function getInformations() {
    // Funzione per avere il nome dell'ortaggio con la prima lettera maiuscola
    var titolo = ortaggioNome.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    var img = "img/ortaggi/" + ortaggioNome + ".jpg";
    $("#nomeOrtaggio").text(titolo);
    $("#imgOrtaggio").attr("src", img);
    $("#famigliaOrtaggio").html(ortaggioFamiglia);
    $("#descrizioneOrtaggio").html(ortaggioDescr);
}

$("#imgCollapse.nav-button").click( function() {
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

$(".nav-extended.under-nav").attr('style', 'display: none !important');
$(".nav-extended.bottom-nav").attr('style', 'display: none !important');
$("#imgCollapse").attr('style', 'display: block !important');
getInformations();