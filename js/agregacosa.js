"use strict";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var nombrei = document.getElementById("nombreProducto").value;
var des = document.getElementById("descri").value;
var canti = document.getElementById("cantidad").value;
var identipro = document.getElementById("identiPro").value;
var medi = document.getElementById("medicion").value;
var consumo = document.getElementById("consumotipo").value;
var idinve = document.getElementById("InvenProid").value;
var forma = document.getElementById("agregar");
forma.addEventListener("submit",agrega(),false);
function agrega(){
  db.collection("Producto").doc(identipro).set({
    cantidad: canti,
    descripcion: des,
    idinve: idinve ,
    idpro: identipro,
    medicion: medi,
    nombre: nombrei,
    tipo: consumo
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});  
}
