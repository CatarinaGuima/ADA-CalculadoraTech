alert('Olá, Bem-vindo(a) a CalculadoraTECH');
var escolha = prompt(" Escolha a operação a ser realizada:\n 1-Somar\n 2-Subtrair\n 3-Multiplicar \n 4-Dividir ");
var btn = document.getElementById('btn-sum');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', click);
function click() {
    var numb1 = document.getElementById('number1');
    var numb2 = document.getElementById('number2');
    var resultado = document.getElementById('result');
    if (numb1 && numb2 && resultado) { //+
        var v1 = Number(numb1 === null || numb1 === void 0 ? void 0 : numb1.value); //+
        var v2 = Number(numb2 === null || numb2 === void 0 ? void 0 : numb2.value); //+
        var soma = v1 + v2; //+
        resultado.innerHTML = "A soma dos n\u00FAmeros ".concat(v1, " + ").concat(v2, " \u00E9 igual a <strong>").concat(soma, "</strong>"); //+
    }
}
