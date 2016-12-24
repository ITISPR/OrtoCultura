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
    'use strict';
    var url = "http://web.itis.pr.it:8080/ortocultura/wsSchedeOrtaggi/wsSchedeOrtaggi.php?callback=?";
    
    $.getJSON(url, 'service=getCategories', function (resp) {
        $("#didattica").empty();
        var strCategories = '<br /><ul class="collapsible" data-collapsible="accordion">';
        
        $.each(resp, function (categoria, elements) {
            var i, key;
            
            strCategories += '<li><div class="collapsible-header"><img src="img/' + categoria + '.png" class="icon_categories"><span><b>' + categoria + '</b></span></div></div><div class="collapsible-body">';
            for (i = 0; i < elements.length; i += 1) {
                strCategories += '<div data-id-ortaggio=' + elements[i].id + ' class="collapsible-header">' + elements[i].nome + '</div>';
            }
        });

        
        /*$(resp).each(function (categoria, element) {
            //
            window.alert(categoria);
            $(resp[categoria]).each(function (ortaggio, el_o) {
                window.alert(resp[categoria][ortaggio].nome);
                //
            });
        });*/
        
                /*for (key in elements[i]) {
                    if (elements[i].hasOwnProperty(key)) {
                        console.log("Chiave: " + key + ", Valore: " + elements[i][key]);
                    }
                }*/
        
        strCategories += '</div></li>';
        $("#didattica").append(strCategories);
    });

    
}

$(document).ready(function () {
    'use strict';
    app.initialize();
    
    $("#id_li_didattica").click(getCategories);
});
