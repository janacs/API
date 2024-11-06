//importar o axios
import axios from "axios"
import { useEffect } from "react";
//o axios é uma biblioteca JavaScript para facilitar as requisições HTTP, buscar dados de API de forma simples
export default function App() {

  const [info, setInfo] = useState({})
  //função que vai pegar os dados da API, assíncrona
  const getDados = async () => {
    //variavel
    const dados = await axios.get("https://rickandmortyapi.com/api/character/");
    
    setInfo(dados.data.results)
    console.log(dados)
  }

  //para executar a API assim que for montada a página

  useEffect(()=>{
    getDados()
  },[])
  return (
    <main>
      <h1>API - Rick and Morty</h1>
    </main>
  );
}