function calcularImc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

function classificarImc(imc) {
    var classificao 
    if (imc <= 18.5) {
        classificao = "abaixo do peso";
    }
    else if (imc >= 18.6 && imc < 25) {
        classificao = "no peso Ideal";
    }
    else if (imc >= 25 && imc < 30) {
        classificao = "levemente acima do peso";
    }
    else if (imc >= 30 && imc < 35) {
        classificao = "com obesidade grau I";
    }
    else if (imc >= 35 && imc < 40) {
        classificao = "com obesidade grau II";
    }
    else if (imc >= 40) {
        classificao = "com obesidade grau III";
    }
    return classificao;
}
