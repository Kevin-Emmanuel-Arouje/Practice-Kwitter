//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAXCp7OcHttwyEx1biRWD0Qdn3ChZcm1H0",
    authDomain: "kwitter-bc654.firebaseapp.com",
    databaseURL: "https://kwitter-bc654-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-bc654",
    storageBucket: "kwitter-bc654.appspot.com",
    messagingSenderId: "864730004384",
    appId: "1:864730004384:web:cd70c9ee62f8ffd40082c5",
    measurementId: "G-CZ6DH02F2Z"
  };

firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
    ;
}