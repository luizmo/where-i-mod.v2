import { useState, useEffect } from "react";
import axios from "axios";


const api = axios.create({
    headers: {
        'Client-ID': 'p15k78oyi8rz89gn1k82wwrm1d28am',
        'Authorization': 'Bearer ur8pbgroezurz598fyftggx2woa29p'
    }
})
function FetchMods(usuario) {
    const [listaAux, setListaAux] = useState(null);
    const [lista, setLista] = useState('');
    const [arrayIcon, setArrayIcon] = useState(null);

    useEffect(() => {
        if (usuario !== '') {
            fetch(`https://modlookup.3v.fi/api/user-v3/${usuario}`)
                .then(res => res.json())
                .then(data => setListaAux(data.channels))
        }
    }, [usuario])

    useEffect(() => {
        if (listaAux !== null) {
            var nomes = '';
            listaAux.map(i => nomes += 'login=' + i.name + '&')
            api.get('https://api.twitch.tv/helix/users?' + nomes)
                .then(result => setArrayIcon(result.data.data))
            }
        }, [listaAux])
        
        useEffect(() => {
            if (arrayIcon !== null) {
            arrayIcon.sort((a, b) => { return a.login.localeCompare(b.login) })
            // setLista(Object.assign(listaAux, arrayIcon))
            setLista(listaAux.map((n, index) => ({ ...n, icon: index && arrayIcon[index]?.profile_image_url })))
        }
    }, [arrayIcon])
    
    return lista;
}
export { FetchMods }; 