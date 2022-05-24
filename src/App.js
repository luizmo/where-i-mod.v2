import { useRef, useState } from "react";
import{ Ordenar} from "./GerarLista";
import './App.css';
import {FetchMods} from "./FetchMods";






function App() {
  //declarações iniciais
  const [searchArea, setSearchArea]= useState('luki302');
  const searchAreaRef = useRef(null);

  const [inner_search, setInner_search] = useState('');
  
  const [IsCheckedPartner, setIsCheckedPartner] = useState(false);
  const [IsCheckedMulheres, setIsCheckedMulheres] = useState(false); 
  const [IsCheckedHomens, setIsCheckedHomens] = useState(false); 
  const [ListaFiltros, setListaFiltros]= useState([IsCheckedPartner, IsCheckedMulheres, IsCheckedHomens]);
  
  const [ordem, setOrdem] = useState(1);

  var lista = '';
  // fim das declarações inicias

  // lista de constantes
  const selects = [ //opções de organização 
  { label: 'mais seguidores', valueS: '1' },
  { label: 'menos seguidores', valueS: '2' },
  { label: 'nome', valueS: '3' }
  ]
  const filtros = [
    {
      name: 'Partner',
      checked: IsCheckedPartner,
      label: 'Partner',
    }
  ]
  // fim da lista de constantes 

  // gera e renderiza a lista de mods
    lista=FetchMods(searchArea);
    if (lista != '') {
      lista = Ordenar(lista, ordem, ListaFiltros, inner_search, [0, lista.length]) //invoca a função ordenar
    }
    else
    lista = 'carregando'; //provisório(melhorias visuais)  
  //fim
    console.log('app: ', ordem)


  //handles
  const handleSearch = (e) =>{
    e.preventDefault();
    setSearchArea(searchAreaRef.current.value);

  }
              //lida com os filtros
  function handleChangeFiltros(filtro, status)
  {
    switch (filtro)
    {
      case 'Partner':
        setIsCheckedPartner(!status);
        setListaFiltros([!status, IsCheckedMulheres, IsCheckedMulheres]);
        break;
      default:
        break;
    }
  }
 
  //fim handles 

  return (
    <div className='corpo'>
      <div className='header'>
        <label className="searchBarLabel">Procure por usuário</label>
        <div className="searchBar">
            <form className="searchbar_header">
            <input placeholder=" usuário" ref={searchAreaRef}/>
            <button onClick={handleSearch}><span className="material-symbols-outlined">search</span></button>
            </form>
        </div>
      </div>
      <div className='listaMembros'>CHANNELS YOU MOD:</div>
      <div className='mainBox'>
        <div className='leftBox'>
          <div className='filtros'> FILTROS:
            {filtros.map(filtros =>
            {
              return (
                <div key={filtros.name} >
                  <input type='checkbox' name={filtros.name}  value={IsCheckedPartner} onChange={()=>handleChangeFiltros(filtros.name,filtros.checked)} />
                  <label> {filtros.name} </label> <br></br>
                </div>)
            }
            )}
          </div>
        </div>
        <div className='topBar'>
          <div className="inner_search">
              <input className='inner_searchBar'placeholder=" canal" value={inner_search} onChange={(e)=> setInner_search(e.target.value)}/>
              <span className="material-symbols-outlined">search</span>
          </div>
          <div className='selecionar'>
            <label> Organizar Por  <br></br>
              <select name='organizar' id='SelectORG' value={ordem} onChange={(e) => setOrdem(e.target.value)}> {/*determina o padrão de organização*/}
                {selects.map(labels => { return (<option key={labels.label} value={labels.valueS}> {labels.label} </option>) })}   {/*gera os opções de organização*/}
              </select>
            </label>
          </div>
        </div>
        <div className='rightBox' id='RightBox'>
          {lista}
        </div>
        {<div className='pagesButton'>

        </div>}
      </div>
    </div>
  );
}

export default App;