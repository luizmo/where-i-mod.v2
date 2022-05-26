import axios from "axios";
import { useState, useEffect } from "react";

function TwitchAPI(lista){
    const [arrayIcon, setArrayIcon] = useState('');

    const api = axios.create({
        headers: {
            'Client-ID': 'p15k78oyi8rz89gn1k82wwrm1d28am',
            'Authorization': 'Bearer ur8pbgroezurz598fyftggx2woa29p'
        }
    })
    useEffect(() => {
        api.get('https://api.twitch.tv/helix/users?login=luki302')
            .then(result => setArrayIcon(result.data.data[0]))
                
            }, [])

    if(lista!=''){
        lista=lista.map(item => ({...item, icon:arrayIcon.profile_image_url}))
        console.table(lista);
        return lista;
    }

}

export default TwitchAPI;