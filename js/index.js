
function calcularImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

function classificarImc(imc) {
    if (imc <= 18.5) {
        var classificao = "abaixo do peso";
        return classificao;
    }
    else if (imc >= 18.6 && imc < 25) {
        var classificao = "no peso Ideal";
        return classificao;
    }
    else if (imc >= 25 && imc < 30) {
        var classificao = "levemente acima do peso";
        return classificao;
    }
    else if (imc >= 30 && imc < 35) {
        var classificao = "com obesidade grau I";
        return classificao;
    }
    else if (imc >= 35 && imc < 40) {
        var classificao = "com obesidade grau II";
        return classificao;
    }
    else if (imc >= 40) {
        var classificao = "com obesidade grau III";
        return classificao;
    }
}

var $calcular_imc = document.getElementById("calcular_imc");

$calcular_imc.addEventListener("click", function () {
    var $nome = document.getElementById("nome");
    var $peso = document.getElementById("peso");
    var $altura = document.getElementById("altura");
    var $mostra_imc = document.getElementById("mostrar_imc");

    if ($nome.value != "" && $peso.value != "" && $altura.value != "") {
        var imc = calcularImc($peso.value, $altura.value).toFixed(2);
        $mostra_imc.textContent = $nome.value + ", seu IMC é " +imc+", você está "+classificarImc(imc)+".";
        $nome.value = "";
        $peso.value = "";
        $altura.value = "";
    }
    else {
        alert("Preencha todos os campos para calcular o IMC");
    }

});