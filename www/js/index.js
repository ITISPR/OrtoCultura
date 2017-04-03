/*global $, jQuery, alert, console*/

/* OGGETTO APP */
var app = {
    // Application Constructor
    initialize: function () {
        'use strict';
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        'use strict';
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function () {
        'use strict';
        app.receivedEvent('deviceready');
    },
    receivedEvent: function (id) {
        'use strict';
        console.log('Received Event: ' + id);
    }
};
/****************************/

function loginSchool() {
    //'use strict';
    //var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    //$.getJSON(url, 'service=getCategories', function (resp) {
        $("#orti").empty();
        var strLoginOrto = '<a href=""><img src="img/ic_arrow_back_green.png" class="btnIndietro"></a><br><div style="padding: 30px;"><br><br><div class="input-field col s6"><input id="inInput" type="text"><label id="lblInput" for="username">Username</label></div><br /><div class="input-field col s6"><input id="inInput" type="password"><label id="lblInput" for="last_name">Password</label></div><br><div class="center"><a class="waves-effect waves-light btn btnLogin" onclick="singoloOrtoAdmin()">login</a><br><br><a class="waves-effect waves-light btnGuest btn" style="color: #008744; letter-spacing: 0px;">Ospite</a></div></div>'
        $("#orti").append(strLoginOrto);
        $('.collapsible').collapsible(); //initialize Materialize-css component
    //});
}

/****************************/
function getFamilies() {
    'use strict'; //il codice JS deve essere eseguito in modalità strict 
    var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    $.getJSON(url, 'service=getFamilies', function (resp) {
        $("#didattica").empty();
        var strCategories = '<ul class="collapsible" data-collapsible="accordion">';
        
        $.each(resp, function (keyFamiglia, famiglia) {
            var i;
            strCategories += '<li><div onclick="getCategories(this)" class="collapsible-header families"><span>' + famiglia.nome + '</span></div><div class="collapsible-body"></div></li>';
        });
        
        $("#didattica").append(strCategories);
        $('.collapsible').collapsible(); 
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

function singoloOrtoAdmin() {
        'use strict';
        //var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
        //$.getJSON(url, 'service=getCategories', function (resp) {
        $("#orti").empty();
        var strOrto = '<div><img src="img/ic_arrow_back_green.png" class="btnIndietro" onclick="loginSchool()"><a href="#" class="sezioneModifica">Modifica</a></div><br><h4 class="titoloOrto">Orto Scolastico</h4><br /><img class="circularImage" src="img/orto.png"><br /><br /><div class="container bloccoInformazioni"><img src="img/ic_comment_green.png" class="icon_orti" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat molestie enim. Nam et felis id justo vehicula iaculis.<br/><br/><img src="img/ic_today_green.png" class="icon_orti" />Sabato 1 Aprile 2017<br/><br/><img src="img/ic_room_green.png" class="icon_orti" />Via Toscana 10, Parma</div><br/><br/><div style="text-align: center;"><img class="partImg" src="img/ic_view_module_red.png" onclick="particelleAdmin()" /><span class="partSpan">Vedi Particelle</span></div><br/><br/>'
        $("#orti").append(strOrto);
        $('.collapsible').collapsible(); //initialize Materialize-css component
    //});
}

function particelleAdmin() {
		'use strict';
		$("#orti").empty();
		var strParticelle = '<img src="img/ic_arrow_back_green.png" class="btnIndietro" onclick="singoloOrtoAdmin()"><br><h4 class="titoloOrto">Particelle</h4><br><br><div class="collection"><a href="#" onclick="particellaSingolaAdmin()" class="collection-item">Particella #1</a><a href="#" class="collection-item">Particella #2</a><a href="#" class="collection-item">Particella #3</a><a href="#" class="collection-item">Particella #4</a></div><a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></a>'
		$("#orti").append(strParticelle);
		$('.collapsible').collapsible();
}

function particellaSingolaAdmin() {
		'use strict'
		$("#orti").empty();
		var strParticella = '<img src="img/ic_arrow_back_green.png" class="btnIndietro" onclick="particelleAdmin()"><a href="#" class="sezioneModifica">Modifica</a><br><h4 class="titoloOrto">Particella #1</h4><br /><img class="circularImage" src="img/particella_carote.jpg"><br /><br /><div class="container bloccoInformazioni"><img src="img/ic_comment_green.png" class="icon_orti" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat molestie enim. Nam et felis id justo vehicula iaculis.<br/><br/><img src="img/ic_carrot_green.png" class="icon_orti" />Carota (Apiaceae)<br/><br/><img src="img/ic_today_green.png" class="icon_orti" />Domenica 2 Aprile 2017</div><br/><br/>'
		$("#orti").append(strParticella);
		$('.collapsible').collapsible();
}

/*function getCategories(famiglia) {
    'use strict';
    var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    
    $.getJSON(url, 'service=getCategories', function (resp) {
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
}*/

/*
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
*/
/****************************/

$(document).ready(function () {
    'use strict';
    app.initialize();
    
    var isCalled = false;
    
    $("#id_li_didattica").click(function () {
        if (!isCalled) {
            getFamilies();
        }
    });
});

