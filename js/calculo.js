function validaCPF(cpf) {
    //console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {

        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);
        digitos = cpf.substring(10);

        for (k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;

        }
        console.log(soma);

        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

        //validação do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;

        console.log(digitos.toString().charAt(0) + " é a primeira posição da variavel");

    }
}

function validacao() {
    console.log("Iniciando validação CPF");

    var img = "https://a0.muscache.com/im/pictures/e6c4b347-49c7-4840-8c00-df36a2a273da.jpg?aki_policy=x_large"

    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

} 