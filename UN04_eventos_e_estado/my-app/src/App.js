import "./App.css";
import Mensagem from "./components/Mensagem/Mensagem.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Filmes from "./components/Filmes/Filmes.js";
import Form from "./components/Form/Form.js";
import Button from "./components/Button/Button.js";
import { useState } from 'react';

function App() {
  //let count=0;
  const [count, setCount]= useState(0)
  function handleClick(){
    alert('Olá!')
  }
  function handleClickButton1(){
    alert('Botão 1 clicado!')
  }
  function handleClickButton2(){
    console.log('Botão 2 clicado!')
  }
  function adiciona(){
    setCount(count + 1);
  }
  function remove(){
    setCount(count - 1);
    console.log(count)
  }
  return (
    <>
      <Header />
      <div className="container">
        <Mensagem cor="blue">Tenha uma ótima semana</Mensagem>
        <Filmes />
        <section className='contato'>
          <h2>Gostou? Entre em contato conosco!</h2>
          <Form/>
        </section>
        <section>
          <h2>Eventos</h2>
          {/* <button onClick={handleClick}>Clique</button>
          <button onClick={()=>alert('Arrow Function')
          }>Clique com função dentro do elemento</button>
          <button onMouseEnter={handleClick}>Clique</button> */}
          <Button text="Botão 1" onClick={handleClickButton1}/>
          <Button text="Botão 2" onClick={handleClickButton2}/>
        </section>
        <section>
          <h3>Contador</h3>
          <Button text="Adiciona"onClick={adiciona}/>
          <Button text="Remove"onClick={remove}/>
          <h4>{count}</h4>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default App;
