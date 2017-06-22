/*
Map Api Js Start
*/
var dkyVizyon = [
    ['DKY Vizyon', 40.9086177, 29.1923373, '../../dist/images/pin.png', 1]
    /*['DKY Vizyon', 40.9088177, 29.1925373, '../../dist/images/pin.png', 2]
    ['Cronulla Beach', -34.028249, 151.157507, 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 2],
    ['Maroubra Beach', -33.950198, 151.259302, 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', 4]*/
];
var dkySahil = [
    ['DKY Sahil', 40.8944685, 29.171256, '../../dist/images/pin.png', 1]
]
var dkyOnKagithane = [['DKY On Kağıthane', 41.085888, 28.9703857, '../../dist/images/pin.png', 1]];
var dkyGoztepe = [
    ['DKY Cadde Göztepe 05', 40.9801883, 29.0653588, '../../dist/images/pin.png', 1]
];
var dkyBusiness = [
    ['DKY Business Kartal', 40.9090283, 29.2100452, '../../dist/images/pin.png', 1]
];
var dkyLokumEvler = [
    ['Lokum Evler', 40.8750308, 29.3239722, '../../dist/images/pin.png', 1]
];
var dkyAda = [
    ['DKY Ada', 40.905396, 29.185898, '../../dist/images/pin.png', 1]
];
var dkyBusinessTuzla = [
    ['DKY Business Tuzla', 40.847713, 29.2967011, '../../dist/images/pin.png', 1]
];
var dkyCaddeSuadiye = [
    ['DKY Cadde Suadiye 12', 40.96679, 29.085285, '../../dist/images/pin.png', 1]
];
var dkyCaddeErenkoy = [
    ['DKY Cadde Erenköy 86', 40.978263, 29.073121, '../../dist/images/pin.png', 1]
];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(40.89446, 29.1712),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    types: ['hospital', 'school', 'shopping_mall', 'amusement_park', 'park', 'food', 'gym', 'mosque'],
    /*styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "lightness": "-1" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [{ "lightness": "20" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#8a962f" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "color": "#a4ff00" }, { "visibility": "simplified" }] }, { "featureType": "administrative.country", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "lightness": "20" }] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [{ "color": "#ca2f2f" }, { "visibility": "on" }] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "lightness": "0" }, { "color": "#f1ff00" }, { "saturation": "9" }, { "visibility": "simplified" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#3e3e3e" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "lightness": "-62" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#13232a" }, { "lightness": 17 }] }]*/
    styles: [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#25292e"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
                },
                {
                    "lightness": 20
                },
                {
                    "color": "#47546e"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "saturation": -31
                },
                {
                    "lightness": -33
                },
                {
                    "weight": 2
                },
                {
                    "gamma": "0.00"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "45"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
                },
                {
                    "saturation": 30
                },
                {
                    "color": "#30363d"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": "0"
                },
                {
                    "lightness": "0"
                },
                {
                    "gamma": "0.30"
                },
                {
                    "weight": "0.01"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "100"
                },
                {
                    "saturation": -20
                },
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#32383d"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
                },
                {
                    "saturation": -30
                },
                {
                    "color": "#2a3037"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": "-100"
                },
                {
                    "lightness": "-100"
                },
                {
                    "gamma": "0.00"
                },
                {
                    "color": "#2a3037"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#575e6b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "weight": "1"
                },
                {
                    "gamma": "1"
                },
                {
                    "saturation": "100"
                },
                {
                    "lightness": "1"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#474b51"
                },
                {
                    "visibility": "on"
                },
                {
                    "weight": "0.78"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "weight": "1.06"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": "75"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "hue": "#ff6600"
                },
                {
                    "lightness": "1"
                },
                {
                    "saturation": "100"
                },
                {
                    "gamma": "1"
                },
                {
                    "weight": "2.08"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "hue": "#ff0000"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
                },
                {
                    "color": "#35485f"
                }
            ]
        }
    ]

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
        map.panTo(latLng);
        clearMarkers();
        test(locations);
        $('.dprojs li').removeClass('active');
        $(button).addClass('active');
        aktifs();
    });
}
runMap('.dky-sahil-harbtn', dkySahil, { lat: dkySahil[0][1], lng: dkySahil[0][2] });
runMap('.dky-kartal-harbtn', dkyVizyon, { lat: dkyVizyon[0][1], lng: dkyVizyon[0][2] });
runMap('.dky-on-harbtn', dkyOnKagithane, { lat: dkyOnKagithane[0][1], lng: dkyOnKagithane[0][2] });
runMap('.dky-cadde-goztepe-harbtn', dkyGoztepe, { lat: dkyGoztepe[0][1], lng: dkyGoztepe[0][2] });
runMap('.dky-bsness-kartal-harbtn', dkyBusiness, { lat: dkyBusiness[0][1], lng: dkyBusiness[0][2] });
runMap('.dky-lokum-harbtn', dkyLokumEvler, { lat: dkyLokumEvler[0][1], lng: dkyLokumEvler[0][2] });
runMap('.dky-ada-harbtn', dkyAda, { lat: dkyAda[0][1], lng: dkyAda[0][2] });
runMap('.dky-bsness-tuzla-harbtn', dkyBusinessTuzla, { lat: dkyBusinessTuzla[0][1], lng: dkyBusinessTuzla[0][2] });
runMap('.dky-cadde-suadiye-harbtn', dkyCaddeSuadiye, { lat: dkyCaddeSuadiye[0][1], lng: dkyCaddeSuadiye[0][2] });
runMap('.dky-cadde-erenkoy-harbtn', dkyCaddeErenkoy, { lat: dkyCaddeErenkoy[0][1], lng: dkyCaddeErenkoy[0][2] });


var pli = '.dprojs li', plli = '.dplaces li';
function adcls(eq) {
    $(plli).eq(eq).find('span').addClass('active');
}
var hastane = 0;
var okul = 1;
var resmiKurum = 2;
var avm = 3;
var orman = 4;
var ulasim = 5;
var cami = 6;
var park = 7;
var yemek = 8;
var spor = 9;

function aktifs() {
    if ($(pli).eq(0).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(okul);
        adcls(resmiKurum);
        adcls(avm);
        adcls(yemek);

    }
    if ($(pli).eq(1).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(okul);
        adcls(resmiKurum);
        adcls(avm);
        adcls(ulasim);
        adcls(park);
        adcls(yemek);
    }
    if ($(pli).eq(2).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(okul);
        adcls(resmiKurum);
        adcls(avm);
        adcls(ulasim);
        adcls(cami);
        adcls(yemek);
        adcls(park);

    }
    if ($(pli).eq(3).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(okul);
        adcls(hastane);
        adcls(avm);
        adcls(yemek);
        adcls(ulasim);
        adcls(cami);
        adcls(resmiKurum);
    }
    if ($(pli).eq(4).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(avm);
        adcls(yemek);
        adcls(ulasim);
        adcls(resmiKurum);
    }
    if ($(pli).eq(5).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(avm);
        adcls(yemek);
        adcls(ulasim);
        adcls(resmiKurum);
        adcls(okul);
    }
    if ($(pli).eq(6).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(avm);
        adcls(yemek);
        adcls(ulasim);
        adcls(cami);
        adcls(okul);
        adcls(park);
    }
    if ($(pli).eq(7).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(avm);
        adcls(hastane);
        adcls(ulasim);
        adcls(yemek);

    }
    if ($(pli).eq(8).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(avm);
        adcls(ulasim);
        adcls(yemek);
        adcls(okul);

    }
    if ($(pli).eq(9).hasClass('active')) {
        $(plli + ' span').removeClass('active');
        adcls(avm);
        adcls(ulasim);
        adcls(yemek);
        adcls(okul);
        adcls(resmiKurum);
        adcls(cami);
        adcls(hastane);
    }
}
aktifs();