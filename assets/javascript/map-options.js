(function(window, google, mapster) {
  mapster.MAP_OPTIONS = {
    center: {
      lat: 29.729300,
      lng: -95.548302
    },
    zoom: 11,
    disableDefaultUI: true,
    scrollwheel: true,
    draggable: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      posiiton: google.maps.ControlPosition.LEFT_BOTTOM
    },
    cluster: false,
    geocoder: true
  };
}(window, google, window.Mapster || (window.Mapster = {})))
