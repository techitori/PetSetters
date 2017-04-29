  (function(window, $) {

    var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);

    $mapster.mapster('getCurrentPosition', function(position) {
      $mapster.mapster('addMarker', {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        content: '<div style="color: #f00;">Current Location</div>',
        draggable: true,
        id: 1,
        icon: 'http://maps.google.com/mapfiles/kml/pal3/icon31.png'
      });
    });

    // LIBRARY OF MARKERS FOR SETTER LOCATIONS ON THE MAP***
    $mapster.mapster('addMarker', {
      lat: 29.743232,
      lng: -95.567650,
      content: 'Setter 1',
      id: 2
    });

    $mapster.mapster('addMarker', {
      lat: 29.702629,
      lng: -95.530810,
      content: 'Setter 2',
      id: 3
    });

    $mapster.mapster('addMarker', {
      lat: 29.689198,
      lng: -95.567599,
      content: 'Setter 3',
      id: 4
    });
    $mapster.mapster('addMarker', {
      lat: 29.706025,
      lng: -95.480869,
      content: 'Setter 4',
      id: 5
    });
    $mapster.mapster('addMarker', {
      lat: 29.753908,
      lng: -95.516322,
      content: 'Setter 5',
      id: 6
    });
    $mapster.mapster('addMarker', {
      lat: 29.686371,
      lng: -95.504586,
      content: 'Setter 6',
      id: 7
    });

  }(window, jQuery));
