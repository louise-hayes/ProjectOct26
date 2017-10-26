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
