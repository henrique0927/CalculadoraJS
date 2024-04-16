function fazerCalculo() {
    var operacao = document.querySelector('select[name="viagem"]').value;
    var numOne = parseFloat(document.getElementById('numOne').value);
    var numTwo = parseFloat(document.getElementById('numTwo').value);
    // Criação de variáveis para pegar cada elemento em que é colocado algum valor.

    var resultado;
    // Variável para juntar o resultado entre os 1º e 2º números.

    // Usando o swith para realizar uma ação de acordo com o valor obtido.
    // na variável operação
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
            // Não executa o programa caso o usuário coloque uma opção inválida.
    }
    console.log(operacao);
    // Mostrando o valor da operação no console.
    // Para ter valor certeza de qual operação está sendo chamada. 

    document.getElementById('span-resultado').textContent = resultado;
    // Selecionando o elemento <span> pelo ID e mostrando na tela o valor do resultado.
}
