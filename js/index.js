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

function mostrarIMC(event) {    
    event.preventDefault();
    
    var $nome = document.forms['calculo_imc'].nome;
    var $mostrar_nome = document.forms['calculo_imc'].mostrar_nome;
    var $mostra_imc = document.getElementById("mostrar_imc");    
    var imc = calcularImc($peso.value, $altura.value).toFixed(2);
    
    if($nome.value != '' && $peso.value != '' && $altura.value != '' && $form.checkValidity()) {
    
        if ($mostrar_nome.value == 0 && mostar_condicao_fisica.value == 0)
            $mostra_imc.textContent = $nome.value + ", seu IMC é " +imc+", você está "+classificarImc(imc)+".";       
        
        else if($mostrar_nome.value == 1 && mostar_condicao_fisica.value == 0) 
            $mostra_imc.textContent = "Seu IMC é " +imc+", você está "+classificarImc(imc)+".";
        
        else if ($mostrar_nome.value == 0 && mostar_condicao_fisica.value == 1)
            $mostra_imc.textContent = $nome.value + ", seu IMC é " +imc;
        
        else if($mostrar_nome.value == 1 && mostar_condicao_fisica.value == 1) 
            $mostra_imc.textContent = "Seu IMC é " +imc;
    }                    
}