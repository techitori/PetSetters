//Get's user's location... option 1
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

//Gather's the User's GPS coordinates... option 2
// var x = document.getElementById("demo");
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
// }

//Displays the user's location on a map... May not use this as we have the div in the HTML
// function showPosition(position) {
//     var latlon = position.coords.latitude + "," + position.coords.longitude;
//
//     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
//     "+latlon+"&zoom=14&size=400x300&sensor=false&key=328439227856-tddnkfp55u37m9r707ohrtiks2od3rel.apps.googleusercontent.com";
//
//     document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
// }

//Handles Errors
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


// geo = navigator.geolocation
//
// //Check for geolocation availability
// if ("geolocation" in navigator) {
//   /* geolocation is available */
// } else {
//   /* geolocation IS NOT available */
// }
//
// //Gather the user's current location
// navigator.geolocation.getCurrentPosition(function(position) {
//   do_something(position.coords.latitude, position.coords.longitude);
// });
//
// // API callback Error
// function errorCallback(error) {
//   alert('ERROR(' + error.code + '): ' + error.message);
// };
