function Ordenar(lista, ordem, ListaFiltros, inner_search, [começo, fim]) {  // (array de mods, padrão de ordenagem, filtros, pesquisa na lista, parte da lista a ser exibida)
  if (inner_search !== '') { //barra de pesquisa
    return (lista.filter((f) => f.name.toLowerCase().includes(inner_search.toLowerCase())).map(membro => {
      return (
        <a key={membro.name} href={'http://www.twitch.tv/' + membro.name} target="_blank"  rel="noreferrer" className='rightBox_card_click'>
        <div className='rightBox_card_content'>
          <img src={membro.icon} width='70rem' alt='' className='rightBox_card_content_icon' />
          <div className="rightBox_card_content_name">{membro.name}</div>
          <div className="rightBox_card_content_followers"><span className="material-symbols-outlined">person</span><span>:{membro.followers}</span></div>
        </div>
      </a>);}))
  }
  if (ListaFiltros[0]) {
    lista = lista.filter((f) => f.partnered === true);
  }
  switch (ordem) { //valor definido pelo selectORG
    case '1':
      lista.sort((a, b) => parseFloat(b.followers) - parseFloat(a.followers)); //ordem crescente de seguidores
      break;
    case '2':
      lista.sort((a, b) => parseFloat(a.followers) - parseFloat(b.followers)); //ordem decrescente de seguidores
      break;
    case '3':
      lista.sort((a, b) => { return a.name.localeCompare(b.name) }); //ordem alfabética
      break;
    default:
      break;
  }

  var novaLista = lista.slice(começo, fim); //corta a lista de 8 em 8
  return (novaLista.map(membro => {
    return (
      <a key={membro.name} href={'http://www.twitch.tv/' + membro.name} target="_blank"  rel="noreferrer" className='rightBox_card_click'>
        <div className='rightBox_card_content'>
          <img src={membro.icon} width='70rem' alt='' className='rightBox_card_content_icon' />
          <div className="rightBox_card_content_name">{membro.name}</div>
          <div className="rightBox_card_content_followers"><span className="material-symbols-outlined">person</span><span>:{membro.followers}</span></div>
        </div>
      </a>)
  }))
}

export { Ordenar };

