var locationMap = (function() {

    var mapContainer =document.getElementById('location__map');
    var mapCenter = {lat: 50.393495, lng: 30.705999};
    var infowindow = null;

    var markers = [
        {lat: 50.401157, lng: 30.685657, type: 'sales_dep', message:'<span class="location__infowindow">Відділ продажу:<br/> Бориспільська траса 252 А<br/> (метро Бориспільська)</span>'},
        {lat: 50.388818, lng: 30.722393, type: 'main', message:'<span class="location__infowindow">Адреса ЖК О2 Residence:<br/> Бориспільська траса 252 А<br/> (метро Бориспільська)</span>'}
    ];

    var icons = {
        sales_dep: {
            icon: '../img/location/sales_dep.png'
        },
        main: {
            icon: '../img/location/main.png'
        }
    };

    var map = new google.maps.Map(mapContainer, {
        zoom: 14,
        center: mapCenter,
        mapTypeControl: false,
        disableDefaultUI: true
    });

    markers.forEach(function(marker) {

        var marker = new google.maps.Marker({
            position: {lat: marker.lat, lng: marker.lng},
            map: map,
            icon: icons[marker.type].icon,
            message: marker.message
        });

        infowindow = new google.maps.InfoWindow({
            content: marker.message
        });
        
        marker.addListener('click', function() {
            if(infowindow) {
                infowindow.close();
            }
            infowindow.setContent(this.message);
            infowindow.open(map, marker);
        });
    });

})();