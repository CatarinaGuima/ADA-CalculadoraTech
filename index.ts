alert('Olá, Bem-vindo(a) a CalculadoraTECH')

let escolha = prompt(" Escolha a operação a ser realizada:\n 1-Somar\n 2-Subtrair\n 3-Multiplicar \n 4-Dividir ");

let btn = document.getElementById('btn-sum');

btn?.addEventListener('click', click);

function click() {
    let numb1 = document.getElementById('number1');
    let numb2 = document.getElementById('number2');
    let resultado = document.getElementById('result');
    if (numb1 && numb2 && resultado) {//+
        let v1 = Number((numb1 as HTMLInputElement)?.value);//+
        let v2 = Number((numb2 as HTMLInputElement)?.value);//+
        let soma = v1 + v2;//+
        resultado.innerHTML = `A soma dos números ${v1} + ${v2} é igual a <strong>${soma}</strong>`;//+
    }
}
