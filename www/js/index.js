// Ogetto app
var app = {
    //wsUrl: "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php",
    // Costruttore
    initialize: function () {
        'use strict';
        this.bindEvents();
    },
    bindEvents: function () {
        'use strict';
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // Ascoltatore "DeviceReady" per verificare che le api del dispositivo sono state caricate e pronte ad essere usate
    onDeviceReady: function () {
        'use strict';
        app.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        'use strict';
        console.log('Received Event: ' + id);
    }
};

// Funzione per il caricamento del carosello nel tab Orti
function getCarousel() {
    'use strict';
    
    var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    $.getJSON(url, 'service=getCarousel', function (resp) {
        $("#id_div_orti").empty();
        var strCarousel = "<div class='carousel'>";
        
        $.each(resp, function (keyCarousel, scuola) {
            strCarousel += "<a class='carousel-item' data-name='" + scuola.nome + "'<img src='" + scuola.img + "' /></a>";
        });
        
        strCarousel += "</div>";
        
        $("#id_div_orti").append(strCarousel);
    });
}

function getFamilies() {
    'use strict'; //il codice JS deve essere eseguito in modalità strict 
    var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    $.getJSON(url, 'service=getFamilies', function (resp) {
        $("#id_div_didattica").empty();
        var strCategories = '<ul class="collapsible" data-collapsible="accordion">';
        
        $.each(resp, function (keyFamiglia, famiglia) {
            strCategories += '<li><div onclick="getCategories(this)" class="collapsible-header families"><span>' + famiglia.nome + '</span></div><div class="collapsible-body"></div></li>';
        });
        
        $("#id_div_didattica").append(strCategories);
    });
}

function getCategories(divClicked) {
    'use strict';
    var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    
    $.getJSON(url, 'service=getCategories&famiglia=' + $(divClicked).parent().find(".collapsible-header span").html(), function (resp) {
        var strCategories = '<ul class="collapsible" data-collapsible="accordion">';

        $.each(resp, function (keyCategoria, categoria) {
            var i;
            strCategories += '<li><div class="collapsible-header categories"><img src="' + categoria.img + '" class="icon_categories"><span>' + categoria.nome + '</span></div><div class="collapsible-body"></div></li>';
        }); 

        $(divClicked).parent().find(".collapsible-body").html(strCategories);
        $('.collapsible').collapsible();
    });
}

$(document).ready(function(){
    
    $('.collapsible').collapsible(); 
    $('.carousel').carousel();
    
    // Funzione per far diventare bianca l'icona del tab attivo
    $('ul.tabs.tabs-transparent li.tab').on('click', function(){ 
        var activeName = $(this).attr("data-name");
        var srcImg = $(this).parent().find(".active img").attr("src");
        srcImg = srcImg.replace("white", "dark");
        $(this).parent().find(".active img").attr("src", srcImg);

        srcImg = $(this).find("img").attr("src");
        srcImg = srcImg.replace("dark", "white");
        $(this).find("img").attr("src", srcImg);
        $("#lblNav").html(activeName);
    });

    getCarousel();
    getFamilies();

    $('img#imgCollapse.nav-button').attr("style", "display: none !important");
    $('ul.tabs.tabs-transparent').attr('style', 'display: flex !important');
    $('nav.nav-extended.under-nav').attr('style', 'display: block !important');
});


