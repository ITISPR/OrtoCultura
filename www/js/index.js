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

$(document).ready(function () {
    'use strict';
    app.initialize();
});


function loginSchool(clickedImage) {
    //'use strict';
    //var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    //$.getJSON(url, 'service=getCategories', function (resp) {
        $("#menu").empty();
        $("#orti").empty();
        var strMenuLogin = '<nav class="nav-extended"><div class="nav-wrapper"><a href="#" class="brand-logo"><img src="img/logoWhite.png" width="56" height="56"></a><a href="" class="button-collapse"><img src="img/ic_arrow_back_white.png" style="margin-top: 45%;"></a><ul class="tabs tabs-transparent"><li class="tab"><a class="active" href="#orti"><b>Login</b></a></li></ul></div></nav>'
        var strLoginOrto = '<div style="padding: 30px;"><br><br><div class="input-field col s6"><input id="inInput" type="text"><label id="lblInput" for="username">Username</label></div><br /><div class="input-field col s6"><input id="inInput" type="password"><label id="lblInput" for="last_name">Password</label></div><br><div class="center"><a class="waves-effect waves-light btn btnLogin">login</a><br><br><a href="" style="color: #008744;"><u>registrati</u></a></div></div>'
        $("#menu").append(strMenuLogin);
        $("#orti").append(strLoginOrto);
        $('.collapsible').collapsible(); //initialize Materialize-css component
    //});
}