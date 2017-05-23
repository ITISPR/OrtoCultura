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

$('ul.tabs.tabs-transparent li.tab').on('click', function(){ 

    var srcImg = $(this).parent().find(".active img").attr("src");
    srcImg = srcImg.replace("white", "dark");
    $(this).parent().find(".active img").attr("src", srcImg);
    
    srcImg = $(this).find("img").attr("src");
    srcImg = srcImg.replace("dark", "white");
    $(this).find("img").attr("src", srcImg);
    
});
