import "./App.css";
import Mensagem from "./components/Mensagem/Mensagem.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Filmes from "./components/Filmes/Filmes.js";
import Form from "./components/Form/Form.js";

function App() {
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
      </div>
      <Footer />
    </>
  );
}

export default App;
