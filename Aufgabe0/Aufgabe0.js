document.addEventListener("DOMContentLoaded", meineFunktion);
function meineFunktion() {
    var eingabe = prompt("Ihr Name");
    if (eingabe != null) {
        document.getElementById("demo").innerHTML =
            "Hallo " + eingabe + "! Alles Klar?";
    }
}
//# sourceMappingURL=Aufgabe0.js.map