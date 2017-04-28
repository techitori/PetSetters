// Initialize Firebase
var config = {
  apiKey: "AIzaSyDK2xb6uhXODvmHocBqNT00POAoZpYxX2A",
  authDomain: "setter-sign-up.firebaseapp.com",
  databaseURL: "https://setter-sign-up.firebaseio.com",
  projectId: "setter-sign-up",
  storageBucket: "setter-sign-up.appspot.com",
  messagingSenderId: "34806841360"
};

firebase.initializeApp(config);

var dataRef = firebase.database();

// Initial Values
var name = "";
var email = "";
var years = 0;
var bio = "";
// var pic = "";

// Capture Button Click
$("#add-user").on("click", function(event) {
  event.preventDefault();

  // YOUR TASK!!!
  // Code in the logic for storing and retrieving the most recent user.
  // Don't forget to provide initial data to your Firebase database.
  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim();
  years = $("#years-input").val().trim();
  bio = $("#bio-input").val().trim();
  // pic = $("#pic-input");

  // Code for the push
  dataRef.ref().push({

    // pic: pic,
    name: name,
    email: email,
    years: years,
    bio: bio,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref().on("child_added", function(childSnapshot) {

  // Log everything that's coming out of snapshot
  // console.log(childSnapshot.val().pic);
  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().email);
  console.log(childSnapshot.val().years);
  console.log(childSnapshot.val().bio);
  console.log(childSnapshot.val().joinDate);

  // full list of items to the well
  $("#full-setter-list").prepend("<div class='well'><img style='float:left' src='assets/pictures/PetLogo.JPG'/><div class='well-text'><div id='name'><strong>" + childSnapshot.val().name +
    "</strong></div><div id='email'>" + "Distance: " + childSnapshot.val().email +
    " </div><div id='years'>" + "Review: " + childSnapshot.val().years + " years" +
    " </div><div id='bio'>" + "Rate: " + childSnapshot.val().bio + " </div></div></div>");

// Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

  // Change the HTML to reflect
  // $("#pic-display").html(snapshot.pic);
  $("#name-display").html(snapshot.val().name);
  $("#email-display").html(snapshot.val().email);
  $("#years-display").html(snapshot.val().years);
  $("#bio-display").html(snapshot.val().bio);
});

$('#sign-in').on("click", function(e){
  e.preventDefault();

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
})


     function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 29.7604, lng: -95.3698}
        });
        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
