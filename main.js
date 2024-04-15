function fazerCalculo() {
    var operacao = document.querySelector('select[name="viagem"]').value;
    var numOne = parseFloat(document.getElementById('numOne').value);
    var numTwo = parseFloat(document.getElementById('numTwo').value);
    
    var resultado;
    switch(operacao) {
        case 'soma':
            resultado = numOne + numTwo;
            break;
        case 'subtracao':
            resultado = numOne - numTwo;
            break;
        case 'divisao':
            if (numTwo === 0) {
                resultado = "Não é possível dividir um número por 0 (zero)";
                break;
            }
            resultado = numOne / numTwo;
            break;
        case 'multiplicacao':
            resultado = numOne * numTwo;
            break;
        default: 
            resultado = "Coloque um Operador Válido.";
            break;
    }
    console.log(operacao);
    document.getElementById('span-resultado').textContent = resultado;
}
