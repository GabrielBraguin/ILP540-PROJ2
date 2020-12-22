
"use strict";

document.getElementById("total").innerHTML = 15;
document.getElementById("av").innerHTML = document.getElementById("a").value;
document.getElementById("bv").innerHTML = document.getElementById("b").value;
document.getElementById("cv").innerHTML = document.getElementById("c").value;

function checaTotal() {
    if (document.getElementById("total").innerHTML != 15 ) {           document.getElementById("submitform").type = "button";
        document.getElementById("submitform").style.backgroundColor = "rgba(200, 200, 200, 0.9)";
        document.getElementById("submitform").style.color = "black";
        check = 1;
    } else {
        document.getElementById("submitform").type = "submit";
        document.getElementById("submitform").style.backgroundColor = "rgba(100, 150, 200, 0.8)";
        document.getElementById("submitform").style.color = "ivory";
    }
}

function checaStatus() {
    if (document.getElementById("submitform").style.color === "black") {
    window.alert("Complete 15 pontos de estátistica de personagem");
    document.getElementById("frmnp").reset();
    }
}


function checaNome() {
    var cnome = document.forms["frmnp"]["idname"].value;
    if (cnome === "") {
        alert("Não deixe o nome vazio");
        document.getElementById("idname").value = "Heroi qualquer";
        document.getElementById("idname").focus();
        document.getElementById("idname").select();
    }
}

document.getElementById("submitform").addEventListener("click", function() {
  checaNome();
  checaStatus();
});
