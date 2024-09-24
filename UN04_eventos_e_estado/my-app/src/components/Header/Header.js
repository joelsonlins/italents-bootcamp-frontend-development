import './Header.css';
import Saudacao from '../Saudacao/Saudacao.js'

const Header = ()=>{
  return(
    <header className="header-top">
      <h1>Meu projeto</h1>
      <Saudacao nome='Carlos' sobrenome='Silva'/>
    </header>
  )
}

export default Header;