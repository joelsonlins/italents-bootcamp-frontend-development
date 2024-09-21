import logo from './logo.svg';
import './App.css';

function App() {
  const nome = 'Maria'
  const idade = 18

  const Saudacao = () => {
    return "Olá tudo bem ?"
  }
  const pessoas =[
    {nome: 'João', profissao: 'Instrutor'},
    {nome: 'Maria', profissao: 'Programador'},
    {nome: 'Pedro', profissao: 'Design'}
  ]
  return (
    <div>
      <h1 className='titulo'>Meu nome é {nome}</h1>
      <p>É maior de idade ? {idade>18 ? 'Sim' : 'Não'}</p>
      <p>{Saudacao()}</p>
      <p><Saudacao/></p>{/* chamando como um componente */}
      <ul>
        {pessoas.map(pessoa =>(
          <li>{pessoa.nome}: {pessoa.profissao}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
