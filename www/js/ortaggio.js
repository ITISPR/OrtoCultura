function getInformations() {
    // Funzione per avere il nome dell'ortaggio con la prima lettera maiuscola
    var titolo = ortaggioNome.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    $("#nomeOrtaggio").text(titolo);
    $("#imgOrtaggio").attr("src", ortaggioImg);
    $("#famigliaOrtaggio").html(ortaggioFamiglia);
    $("#descrizioneOrtaggio").html(ortaggioDescr);
}

$(".nav-extended.under-nav").attr('style', 'display: none !important');
$(".nav-extended.bottom-nav").attr('style', 'display: none !important');
$("#imgCollapse").attr('style', 'display: block !important');
getInformations();