function registrar(){
    var email = document.getElementById("correoinicia").value;
    var pass = documetn.getOwnPropertyDescriptor("constra").value;
    firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((user) => {
    window.location.href="home.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    
}
