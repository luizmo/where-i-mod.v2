import { useState, useEffect } from "react";

function FetchMods(usuario) {
    const [lista, setLista] = useState('');

    useEffect(() => {
        fetch(`https://modlookup.3v.fi/api/user-v3/${usuario}`)
            .then(res => res.json())
            .then(data => setLista(data.channels))
        }, [usuario])
    return lista;
}
export {FetchMods}; 