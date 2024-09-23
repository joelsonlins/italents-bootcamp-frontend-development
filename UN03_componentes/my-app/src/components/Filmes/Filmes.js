import Filme from '../Filme/Filme.js'
import './Filmes.css';
const Filmes = () =>{
  const filmes = [
  {
    nome: "Harry Potter e as Relíquias da Morte",
    poster: "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg",
    anoLancamento:2021,
    textAlt:'Poster do filme Harry Potter'
  },
  {
    nome: "O senhor dos aneis: As duas torres",
    poster: "https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg",
    anoLancamento:2018,
    textAlt:'Poster do filme senhor dos aneis: As duas torres',
  },
  {
    nome: "Interestellar",
    poster: "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
    anoLancamento:2014,
    textAlt: "Poster do filme Interestellar"
  },
  {
    nome: "Silêncio dos Inocentes",
    poster: "https://br.web.img3.acsta.net/pictures/14/10/07/22/16/591185.jpg",
    anoLancamento:1991,
    textAlt: "Poster do filme Silêncio dos Inocentes"
  },
  {
    nome: "Avatar",
    poster: "https://br.web.img3.acsta.net/medias/nmedia/18/87/30/40/20028676.jpg",
    anoLancamento:2009,
    textAlt: "Poster do filmes Avatar"
  },
]
  return (
    <section className="filmes">
      <h2>Meus Filmes Favoritos</h2>
      <ul className='filmes-lista'>
      {filmes.map((filme, index)=>( //utilizando o filter -->> {filmes.filter((filme)=> filme.anoLancamento >=2010).map((filme)=>(
        <Filme filme={filme} key={index}/>
      ))}
      </ul>
    </section>
  )
}
export default Filmes;