import Filme from '../Filme/Filme.js'
import Button from "../Button/Button.js";
import Form from "../Form/Form.js";
import FormInput from "../FormInput/FormInput.js";
import './Filmes.css';
import '../Form/Form.css';
import { useEffect, useState } from 'react';

const Filmes = () =>{
  const [filmes, setFilmes] = useState([])
  useEffect(()=>{
      getMovies();
    },[])
  const [filmesForm, setFilmesForm] = useState({
    nome:"",
    poster:"",
    anoLancamento:""
  })
  const handleFieldsChange = (event) =>{
    setFilmesForm({
      ...filmesForm,
      [event.target.name]: event.target.value
    })
  }
  const handleClick = async () =>{
    const response = await fetch('http://localhost:3005/movies',{
      method: 'POST',
      headers: new Headers({"Content-type": "application/json"}),
      body: JSON.stringify(filmesForm)
    })

    const data = await response.json();
    alert(`fiml ${data.nome} cadastrado com sucesso`)
    
    getMovies()

    setFilmesForm({
    nome:"",
    poster:"",
    anoLancamento:""
    })
  }
  const getMovies = async () => {
    const response = await fetch('http://localhost:3005/movies')
    const data = await response.json();
    setFilmes(data);
  }

  return (
    <section className="filmes">
      <h2>Meus Filmes Favoritos</h2>
      <form action="" className="form">
        <FormInput inputName="Nome" id="nome" name="nome" type="text" value={filmesForm.nome} onChange={event=> handleFieldsChange(event)}/>
        <FormInput inputName="Poster" id="poster" name="poster" type="text" value={filmesForm.poster} onChange={event=> handleFieldsChange(event)}/>
        <FormInput inputName="Ano de Lançamento" id="anoLancamento" name="anoLancamento" type="text" value={filmesForm.anoLancamento} onChange={event=> handleFieldsChange(event)}/>
        <Button text="Cadastrar" type="submit" onClick={handleClick}/>
      </form>
      <ul className='filmes-lista'>
      {filmes.map((filme, index)=>( //utilizando o filter -->> {filmes.filter((filme)=> filme.anoLancamento >=2010).map((filme)=>(
        <Filme filme={filme} key={index}/>
      ))}
      </ul>
    </section>
  )
}
export default Filmes;