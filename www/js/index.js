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


function loginSchool() {
    //'use strict';
    //var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    //$.getJSON(url, 'service=getCategories', function (resp) {
        $("#orti").empty();
        var strLogin = '<div style="padding: 30px;"><h4 class="titoloLogin">Accedi al tuo orto</h4><br><br><div class="input-field col s6"><input id="inInput" type="text"><label id="lblInput" for="username">Username</label></div><br /><div class="input-field col s6"><input id="inInput" type="password"><label id="lblInput" for="last_name">Password</label></div><br><div class="center"><a class="waves-effect waves-light btn btnLogin">login</a><br><br><a href="" style="color: #008744;"><u>registrati</u></a></div></div>'
        $("#orti").append(strLogin);
        $('.collapsible').collapsible(); //initialize Materialize-css component
    //});
}