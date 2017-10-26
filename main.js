// Initialize Firebase
var config = {
    apiKey: "AIzaSyCouEcJdFabcHJEztXRK4-sGs3iQ7viWdQ",
    authDomain: "employee-data-71fd7.firebaseapp.com",
    databaseURL: "https://employee-data-71fd7.firebaseio.com",
    projectId: "employee-data-71fd7",
    storageBucket: "employee-data-71fd7.appspot.com",
    messagingSenderId: "1070977771942"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();


// Initial Values
var name = "";
var role = "";
var start = "";
var rate = "";

// Setup
$(document).ready(function() {


    // user clicked in the login area
    $('body').on('click', '#add-user', function(event) {
        // console.log('player clicked: ' + player);
        event.preventDefault();
        console.log('adding user....');
        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        rate = $("#rate-input").val().trim();
        start = $("#start-input").val().trim();
        // Code for handling the push
        database.ref().push({
            name: name,
            // email: email,
            role: role,
            start: start,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });
});




/*
// Firebase watcher + initial loader + order/limit HINT: .on("child_added"
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.email);
    console.log(sv.age);
    console.log(sv.comment);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#email-display").text(sv.email);
    $("#age-display").text(sv.age);
    $("#comment-display").text(sv.comment);

    // Handle the errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});*/
