var product = document.querySelector("#product-form");

document.querySelector("#product-form").addEventListener("submit", function(e){
  e.preventDefault();
  submitEmail();
  product.reset();
  document.getElementById('end').innerHTML="Message send";
});


// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCxV__RzS6ipYUKKkdW-yXldWXuzzbgMSk",
   authDomain: "chatz-web-design.firebaseapp.com",
   databaseURL: "https://chatz-web-design.firebaseio.com",
   projectId: "chatz-web-design",
   storageBucket: "chatz-web-design.appspot.com",
   messagingSenderId: "668113233548",
   appId: "1:668113233548:web:3cda6a85ab41077e72fda9",
   measurementId: "G-Q4MPMBD9G2"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

 // Import libraries

 // Create database var

 let database = firebase.database();

 // Set a reference
 let ref = database.ref("emailfromclients");

 function submitEmail(){

    // Prepare data
   let data = {
     name : document.querySelector("#name").value,
     email: document.querySelector("#email").value,
     subject: document.querySelector("#subject").value,
     category: document.querySelector("#category").value,
     message: document.querySelector("#message").value
   };
   // Upload data
   ref.push(data);
 };
