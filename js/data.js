function dataHoje() {
    var data = new Date();
    var dia;
    var mes;
    var ano;

    dia = data.getDate();
    mes = data.getMonth();
    ano = data.getFullYear();

    var str_data = dia + '/' + (mes + 1) + '/' + ano;
    console.log("hoje é " + str_data);

}

dataHoje()
$('#entrada').html(dataHoje)
document.getElementById("data").style.display = "block";






