class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
  }
}

const pessoa1 = new Pessoa('Maria', 25)
pessoa1.saudacao()
const pessoa2 = new Pessoa('João', 12)
pessoa2.saudacao()

class Aluno extends Pessoa{
  constructor(nome, idade, anoescolar){
    super(nome, idade)
    this.anoescolar = anoescolar
  }

  saudacao(){
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos e estou no ${this.anoescolar} ano escolar`);
  }
}

const aluno = new Aluno('Carlos', 8,3)
aluno.saudacao()