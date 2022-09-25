const firebaseConfig = {
    apiKey: "AIzaSyAThz_8hxlaaYUgGQ1FPzz1JKA9TuQnvuE",
    authDomain: "kwitter-41242.firebaseapp.com",
    databaseURL: "https://kwitter-41242-default-rtdb.firebaseio.com",
    projectId: "kwitter-41242",
    storageBucket: "kwitter-41242.appspot.com",
    messagingSenderId: "845809133284",
    appId: "1:845809133284:web:db8e492faa75a119132ef1"
  };
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

document.getElementById("msg").value="";

  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }

