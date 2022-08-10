var botaoEncript = document.getElementById("botaoEncript");
var botaoDecript = document.getElementById("botaoDecript");
var botaoCop = document.getElementById("botaoCop");

var textCod = document.getElementById("textCod");
var textRes = document.getElementById("textRes");

function codificar() {
    var valorEntr = textCod.value;
    var valorSaida = "";

    if (valorEntr == "") {
        return false;
    }

    for (var i = 0; i < valorEntr.length; i++) {
            if (valorEntr[i] == 'a') {
                valorSaida += 'ai';
            } else if (valorEntr[i] == 'e') {
                valorSaida += 'enter';
            } else if (valorEntr[i] == 'i') {
                valorSaida += 'imes';
            } else if (valorEntr[i] == 'o') {
                valorSaida += 'ober';
            } else if (valorEntr[i] == 'u') {
                valorSaida += 'ufat';
            } else {
                valorSaida += valorEntr[i];
            }
    }

    textRes.innerHTML = valorSaida;
    textCod.value = "";
    textCod.focus();

}

function descriptografar() {
    var valorEntr = textCod.value;
    var valorSaida = "";

    if (valorEntr == "") {
        return false;
    }

    for (var i = 0; i < valorEntr.length; i++) {
            if (valorEntr[i] == 'a' && i < valorEntr.length - 1) {
                valorSaida += 'a';
                if (valorEntr[i + 1] == "i") {
                    i++;
                }
            } else if (valorEntr[i] == 'e' && i < valorEntr.length - 4) {
                valorSaida += 'e';
                if (valorEntr[i + 1] == "n" && valorEntr[i + 2] == "t" && valorEntr[i + 3] == "e" && valorEntr[i + 4] == "r") {
                    i += 4;
                }
            } else if (valorEntr[i] == 'i' && i < valorEntr.length - 3) {
                valorSaida += 'i';
                if (valorEntr[i + 1] == "m" && valorEntr[i + 2] == "e" && valorEntr[i + 3] == "s") {
                    i += 3;
                }
            } else if (valorEntr[i] == 'o' && i < valorEntr.length - 3) {
                valorSaida += 'o';
                if (valorEntr[i + 1] == "b" && valorEntr[i + 2] == "e" && valorEntr[i + 3] == "r") {
                    i += 3;
                }
            } else if (valorEntr[i] == 'u' && i < valorEntr.length - 3) {
                valorSaida += 'u';
                if (valorEntr[i + 1] == "f" && valorEntr[i + 2] == "a" && valorEntr[i + 3] == "t") {
                    i += 3;
                }
            } else {
                valorSaida += valorEntr[i];
            }
    }

    textRes.innerHTML = valorSaida;
    textCod.value = "";
    textCod.focus();
}

function copiar() {
    var textCopia = textRes.innerHTML;

    navigator.clipboard.writeText(textCopia).then(
            function() {
                alert("Copiado com sucesso!");
            })
        .catch(
            function() {
                alert("Falha ao copiar. Tente novamente mais tarde ;)");
            });
}

botaoEncript.onclick = codificar;
botaoDecript.onclick = descriptografar;
botaoCop.onclick = copiar;