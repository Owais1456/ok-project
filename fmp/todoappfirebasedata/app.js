// var firebaseConfig = {
//     apiKey: "AIzaSyBuUetDxIF5kEmfJvlVRhqNy3iX11FHyv0",
//     authDomain: "dbwebapp-e4b1e.firebaseapp.com",
//     databaseURL: "https://dbwebapp-e4b1e-default-rtdb.firebaseio.com",
//     projectId: "dbwebapp-e4b1e",
//     storageBucket: "dbwebapp-e4b1e.appspot.com",
//     messagingSenderId: "452448527308",
//     appId: "1:452448527308:web:7a58284aeb9e96c4b6b369"
//   };

//   // Initialize Firebase
//   var app = firebase.initializeApp(firebaseConfig);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_dt6r_jAts1A_tjWhT8hu-xwxV-BEcGM",
  authDomain: "fdbwebapp-a5d72.firebaseapp.com",
  databaseURL: "https://fdbwebapp-a5d72-default-rtdb.firebaseio.com",
  projectId: "fdbwebapp-a5d72",
  storageBucket: "fdbwebapp-a5d72.appspot.com",
  messagingSenderId: "450580624519",
  appId: "1:450580624519:web:65664a505829c547447422"
};

// Initialize Firebase
const frb = firebase.initializeApp(firebaseConfig);

  
  var list = document.getElementById("list");
  
  firebase
    .database()
    .ref("Todos")
    .on("child_added",  function(data) {
      // console.log(data.val().value);
      var liElement = document.createElement("li");   
      liElement.className = 'todo-item';
  
      var liText = document.createTextNode(data.val().value);
      // console.log(liText);
  
      liElement.appendChild(liText);
  
      list.appendChild(liElement);
  
      var EditBtnELement = document.createElement("button");
  
      var EditBtnText = document.createTextNode("Edit");
      EditBtnELement.className = 'btn';

  
      EditBtnELement.appendChild(EditBtnText);
  
      var DeleteBtnELement = document.createElement("button");
  
      var DeleteBtnText = document.createTextNode("Delete");
      DeleteBtnELement.className = 'btn';

  
      DeleteBtnELement.appendChild(DeleteBtnText);
  
      liElement.appendChild(EditBtnELement);
  
      liElement.appendChild(DeleteBtnELement);
  
      EditBtnELement.setAttribute("class", "Editbtn");
      DeleteBtnELement.style.backgroundColor = "lightcoral";
  
      DeleteBtnELement.setAttribute("onclick", "deleteItem(this)");
  
      DeleteBtnELement.setAttribute("id", data.val().key);
  
      EditBtnELement.setAttribute("onclick", "EditItem(this)");
  
      EditBtnELement.setAttribute("id", data.val().key);
    });
  
  function   addTodo ()  {
    var input = document.getElementById("todoInput");
  
    var id =firebase.database().ref("Todos").push().key
    console.log(id);
  
    var todoObj = {
  value: input.value,
      key: id,
    };
  
      
     firebase.database().ref('Todos/' + id).set(todoObj);
    
  
    // firebase.database().ref("Todos").child(id).set(todoObj)
  
  }
  
  function deleteAll() {
    firebase.database().ref("Todos").remove();
    list.innerHTML = "";
  }
  
  function deleteItem(e) {
    firebase.database().ref(`Todos/${e.id}`).remove();
    e.parentNode.remove();
  }
  
  function EditItem(e) {
    var updateValue = prompt(
      "Enter updated value",
      e.parentNode.firstChild.nodeValue
    );
  
    firebase.database().ref(`Todos/${e.id}`).set({
      key: e.id,
      todoVal: updateValue,
    });
  
    e.parentNode.firstChild.nodeValue = updateValue;
  }