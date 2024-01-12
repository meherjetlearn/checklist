const firebaseConfig = {
  apiKey: "AIzaSyAGoBxrBDaaq9VAVom8HoIPaI6zDebaltM",
  authDomain: "memechat-63c7b.firebaseapp.com",
  databaseURL: "https://memechat-63c7b-default-rtdb.firebaseio.com",
  projectId: "memechat-63c7b",
  storageBucket: "memechat-63c7b.appspot.com",
  messagingSenderId: "2569848516",
  appId: "1:2569848516:web:c921b54ee5a7ebf6762b91"
};

  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);






 function addItem(){
  item = document.getElementById("msg").value;

  firebase.database().ref("/").child(item).update({
    purpose : "adding message"
  });

  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    item = childKey;
console.log("Item - " + item);
row = "<div>#"+ item +"</div><hr>";
document.getElementById("output").innerHTML += row;
});
});
  
}

function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        item = childKey;
    console.log("Item - " + item);
   row = "<div>#"+ item +"</div><hr>";
document.getElementById("output").innerHTML += row;
 });
});

}


function del(){
  rem = document.getElementById("msg").value;
  item = rem;
  console.log(item);
  firebase.database().ref("/").child(item).remove();
	
}


function text(){
  console.log(document.getElementById("msg").value);
}
