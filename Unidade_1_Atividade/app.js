import { add, subtract, multiply, divide } from './operations.js';

// Função principal que chama as operações
const calculate = (operation) => {
    // Coletando valores dos inputs
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    // Usando desestruturação para associar operações a funções
    const operationsMap = { add, subtract, multiply, divide };

    // Operador ternário para tratar o caso em que os números não são válidos
    const result = (num1 && num2) 
        ? operationsMap[operation](...spreadNumbers(num1, num2)) 
        : 'Insira dois números válidos';

    // Exibindo o resultado com template literals
    document.getElementById('result').textContent = `Resultado: ${result}`;
};

// Usando spread operator para passar os números
const spreadNumbers = (num1, num2) => [num1, num2];

window.calculate = calculate; // Torna a função acessível no HTML
