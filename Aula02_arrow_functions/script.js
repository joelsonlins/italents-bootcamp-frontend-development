// ARROW FUNCTIONS

//Funcção tradicional
function soma(num1, num2) {
  return num1 + num2;
}

// Arrow function com mais de 1 parâmetro e com 1 retorn
let somaAf = (num1, num2) => num1 + num2

console.log(soma(2, 2));
console.log(somaAf(1, 2));

// arrow function com 1 parâmetro e 1 retorno
let dobra = num => num * 2
console.log(dobra(3))

// arrow function sem parametro e com 1 retorno

let saudacao = () => console.log('olá')

saudacao()