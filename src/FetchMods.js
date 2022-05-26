import { useState, useEffect } from "react";
import axios from "axios";
import { list } from "@chakra-ui/react";

function FetchMods(usuario) {
    const [listaAux, setListaAux] = useState('');
    const [lista, setLista] = useState('');
    const [arrayIcon, setArrayIcon] = useState('');
    const api = axios.create({
        headers: {
            'Client-ID': 'p15k78oyi8rz89gn1k82wwrm1d28am',
            'Authorization': 'Bearer ur8pbgroezurz598fyftggx2woa29p'
        }
    })

    useEffect(() => {
        fetch(`https://modlookup.3v.fi/api/user-v3/${usuario}`)
            .then(res => res.json())
            .then(data => setLista(data.channels))
        }, [usuario])
    
/*     useEffect(() => {
        api.get('https://api.twitch.tv/helix/users?login=luki302')
            .then(result => setArrayIcon(result.data.data[0]))
            if(listaAux!==''){
                setLista(listaAux.map(item => ({...item, icon:arrayIcon.profile_image_url})))
            }
        }, [listaAux])
     */
    
    return lista;
}
export {FetchMods}; 