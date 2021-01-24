window.onload = inicializar;
var formauten;
function inicializar(){
    formauten = document.getElementById("autentificacion");
    formauten = addEventListener("submit",autentificar,false);

}
function autentificar(){
    var usuario = even.target.correoinicia.value;
    var password = even.target.constra.value;
    gacerlogin(usuario,password);
    firebase.auth().signInWithEmailAndPassword(usuario, password).then((user) => {
        alert("Autentificacion Correcta");
        window.location.href = "home.html";
    })
    .catch((error) => {
      alert("no se a realizado la uatentificacion correctamente");
    });

}
