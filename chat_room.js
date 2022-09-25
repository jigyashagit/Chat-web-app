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
  function addroom()
  {
   room_name = document.getElementById("room_name").value;
  
   firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "chat_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name-" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+ "</div><hrs>" ;
   document.getElementById("output").innerHTML +=row;
   });});}

   function redirectToRoomName(name)
   {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location="chat_page.html";
   }
getData();