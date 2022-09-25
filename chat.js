// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAThz_8hxlaaYUgGQ1FPzz1JKA9TuQnvuE",
    authDomain: "kwitter-41242.firebaseapp.com",
    databaseURL: "https://kwitter-41242-default-rtdb.firebaseio.com",
    projectId: "kwitter-41242",
    storageBucket: "kwitter-41242.appspot.com",
    messagingSenderId: "845809133284",
    appId: "1:845809133284:web:db8e492faa75a119132ef1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    
}



