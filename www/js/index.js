/*global $, jQuery, alert, console*/

var app = {
    initialize: function () {
        'use strict';
        this.bindEvents();
    },
    bindEvents: function () {
        'use strict';
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        'use strict';
        app.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        'use strict';
        console.log('Received Event: ' + id);
    }
};

function getCategories() {
    'use strict'; //il codice JS deve essere eseguito in modalità strict 
    var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    
    $.getJSON(url, 'service=getCategories', function (resp) {
        $("#didattica").empty();
        var strCategories = '<ul class="collapsible" data-collapsible="accordion">';
        
        $.each(resp, function (categoria, elements) {
            var i;
            strCategories += '<li><div class="collapsible-header"><img src="img/' + categoria + '.png" class="icon_categories"><span><b>' + categoria + '</b></span></div></div><div class="collapsible-body">';
            for (i = 0; i < elements.length; i += 1) {
                strCategories += '<div onclick="getSingleVegetable()" data-id-ortaggio="' + elements[i].id + '" class="collapsible-header">' + elements[i].nome + '</div>';
            }
        });
        
        strCategories += '</div></li>';
        $("#didattica").append(strCategories);
        $('.collapsible').collapsible(); //initialize Materialize-css component
    });
}

function getSingleVegetable() {
        'use strict';
        //var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
        //$.getJSON(url, 'service=getCategories', function (resp) {
        $("#menu").empty();
        $("#didattica").empty();
        var strMenu = '<nav class="nav-extended"><div class="nav-wrapper" style="height: 65px;"><a href="#" class="brand-logo"><img src="img/logoWhite.png" width="56" height="56"></a><a href="" class="button-collapse"><img src="img/ic_arrow_back_white.png" style="margin-top: 45%;"></a><ul class="tabs tabs-transparent"><li class="tab"><a class="active" href="#orti"><b></b></a></li></ul></div></nav>'
        var strVegetable = '<h4 class="titoloOrtaggio">Pomodoro di Pachino</h4><br /><img class="circularImage" src="img/Pomodoro_Di_Pachino.png"><br /><br /><div class="container bloccoInformazioni"><b style="margin-right:20px;">Descrizione</b>Prodotto ortofrutticolo italiano a indicazione geografica protetta proveniente da parte delle provincie di Siracusa e Ragusa.<hr /><b style="margin-right:20px;">Luogo di Origine</b>Sicilia, Italia<hr /><b style="margin-right:20px;">Riconoscimento</b>I.G.P.</div>'
        $("#menu").append(strMenu);
        $("#didattica").append(strVegetable);
        $('.collapsible').collapsible(); //initialize Materialize-css component
    //});
}

$(document).ready(function () {
    'use strict';
    app.initialize();

    var isCalled = false;
    
    $("#id_li_didattica").click(function () {
        if (!isCalled) {
            getCategories();
        }
    });
});
