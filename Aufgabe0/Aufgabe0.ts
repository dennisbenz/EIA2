document.addEventListener("DOMContentLoaded", meineFunktion);


function meineFunktion(): void {
    var eingabe: string = prompt("Ihr Name", "bla");
    if (eingabe != null) {
        document.getElementById("demo").innerHTML =
            "Hallo " + eingabe + "! Alles Klar?";
    }
}