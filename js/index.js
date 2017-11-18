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

function validate(evt) {
    var keyID = evt.keyCode;
    if (keyID != 8 && keyID != 9 && keyID != 37 && keyID != 39 && keyID != 46 && keyID != 36 && keyID != 35 && keyID != 190) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

}