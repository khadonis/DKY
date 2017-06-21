// /*
/*Map Api Js Start*/
// */

var dkyVizyon = [
    ['DKY Vizyon', 40.9086177, 29.1923373, '../../dist/images/pin.png', 1]
    /* ['Coogee Beach', -33.923036, 151.259052, 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 5],
     ['Cronulla Beach', -34.028249, 151.157507, 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 3],
     ['Manly Beach', -33.80010128657071, 151.28747820854187, 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 2],
     ['Maroubra Beach', -33.950198, 151.259302, 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 4]*/
];
var dkySahil = [
    ['DKY Sahil', 40.8944685, 29.171256, '../../dist/images/pin.png', 1]
]
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(40.89446, 29.1712),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    types: ['hospital', 'school', 'shopping_mall'],
    styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "lightness": "-1" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [{ "lightness": "20" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#8a962f" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "color": "#a4ff00" }, { "visibility": "simplified" }] }, { "featureType": "administrative.country", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "lightness": "20" }] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [{ "color": "#ca2f2f" }, { "visibility": "on" }] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "lightness": "0" }, { "color": "#f1ff00" }, { "saturation": "9" }, { "visibility": "simplified" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#3e3e3e" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "lightness": "-62" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#13232a" }, { "lightness": 17 }] }]

});
var infowindow = new google.maps.InfoWindow();
var marker, i;
var markers = [];
function test(locatis) {
    for (i = 0; i < locatis.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locatis[i][1], locatis[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: new google.maps.MarkerImage(locatis[i][3])
        });
        markers.push(marker);
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locatis[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
};
test(dkySahil);
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
function clearMarkers() {
    setMapOnAll(null);
}
function runMap(button, locations, latLng) {
    $(button).click(function (event) {
        map.setZoom(16);
        map.setCenter(latLng);
        clearMarkers();
        test(locations);
        $('.dprojs li').removeClass('active');
        $(button).addClass('active');
        aktifs();
    });
}
runMap('.dky-sahil-harbtn', dkySahil, { lat: 40.8944685, lng: 29.171256 });
runMap('.dky-kartal-harbtn', dkyVizyon, { lat: 40.90861, lng: 29.19233 });

//var mekanlar = ['Hastaneler', 'Okul', 'Resmi', 'AVN', 'Orman', 'Ulaşım', 'Camii', 'Park', 'Yemek', 'Spor'];
//var liTags = $('.dplaces li');
//var projTags = $('.dprojs li');


function aktifs() {
    if ($('.dprojs li').eq(0).hasClass('active')) {
        $('.dplaces li span').removeClass('active');
        $('.dplaces li:eq(1) span').addClass('active');
        $('.dplaces li:eq(2) span').addClass('active');
        $('.dplaces li:eq(3) span').addClass('active');
        $('.dplaces li:eq(8) span').addClass('active');
    }
    if ($('.dprojs li').eq(1).hasClass('active')) {
        $('.dplaces li span').removeClass('active');
        $('.dplaces li:eq(4) span').addClass('active');
    }
}
aktifs();



