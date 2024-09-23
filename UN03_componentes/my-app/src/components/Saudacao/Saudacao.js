import './Saudacao.css';
function Saudacao({nome='Usuário', sobrenome}){
  //const {nome, sobrenome} = props
  return (
    <h2 className='title'>Olá, {nome} {sobrenome}</h2>
  )
}

export default Saudacao