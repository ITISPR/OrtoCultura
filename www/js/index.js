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

/*$(document).ready(function () {
    'use strict';
    app.initialize();
	$.ajax({ 
		$("#tabOrti").load("orti.html #orti", function() {
			$.getScript("js/orti.js");
		});
		$("#tabDidattica").load("didattica.html #didattica", function () {
			$.getScript("js/didattica.js");
		});
		$("#tabStoria").load("storia.html #storia", function () {
			$.getScript("js/storia.js");
		});
    });
});*/

// Funzione per il caricamento del carosello nel tab Orti
function getCarousel() {
    'use strict';
    
    $.ajax({
        type: "POST",
        url: "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?",
        crossDomain: true,
        data: {
            service: "getCarousel"
        },
        dataType: "json",
        success: function (resp) {
            if (resp.response === "1") {
                $.each(resp, function (key, value) {
                    if (key !== "response") {
                        tempLocali += "<div class='carousel'><a class='carousel-item' data-name='" + value.nome + "'<img src='" + value.percorsoimmagine + "' /></a>";
                    }
                    tempLocali += "</div>";
                });
                $("#id_div_orti").html(tempLocali);
                //Gestione del click sull'immagine del carosello (passo il nome della scuola data-name)
                $("a.carousel-item").click(function () {
                    nomeScuola = $(this).attr("data-name");
                    $("#tabOrti").load("login.html #login", function () {
                        $.getScript("js/login.js");
                    });
                });
            } else {
                $("#id_div_orti").html(resp.error);
            }
        },
        error: function (xhr, status, error) {
            window.alert("Connessione fallita");
        }
    });
}

// Istanza del carosello di immagini della libreria Materializecss
$(document).ready(function(){
    $('.carousel').carousel();
});

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

$('img#imgCollapse.nav-button').attr("style", "display: none !important");
$('ul.tabs.tabs-transparent').attr('style', 'display: flex !important');
$('nav.nav-extended.under-nav').attr('style', 'display: block !important');
