const carro = {
  marca: 'Fiat',
  modelo: 'Uno',
  cor: 'Branco'
}

console.log(carro)
console.log(carro.modelo)
console.log(carro["cor"])

const pessoa = {
  nome: 'Maria',
  sobrenome: 'Santos',
  fullName: function(){
    return this.nome + ' ' + this.sobrenome
  }
}

console.log(pessoa.fullName())

const pessoa2 = new Object;
pessoa2.nome = 'Ivo'
pessoa2.sobrenome = 'Silva'

console.log(pessoa2.nome + ' ' + pessoa2.sobrenome)