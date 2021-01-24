const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var forma1 = document.getElementById("eliminarpro");
var forma2 = docuent.getOwnPropertyDescriptor("eliminainve");
forma1.addEventListener("submit",eliminaP,false);
function eliminaP(){
    var pro = document.getElementById("consultaPro").value;
    db.collection("Producto").doc(pro).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}
forma2.addEventListener("submit",eliminaI,false);
function eliminaI(){
    var pro = document.getElementById("consultaInven").value;
    db.collection("Producto").doc(pro).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}
