const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var nombrei = document.getElementById("nombreInve").value;
var obj = document.getElementById("objetosAguardar").value;
var tipoalma = document.getElementById("tipoAlma").value;
var idinve = document.getElementById("identificadorInve").value;
var forma = document.getElementById("agregar");
forma.addEventListener("submit",agrega(),false);
function agrega(){
  db.collection("Inventario").add({
    idInve: idinve,
    nombre: nombre,
    num: obj ,
    tipo: tipoalme
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});  
}
