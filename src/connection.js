import {
    getAuth,
    createConnection,
    subscribeEntities,
    ERR_HASS_HOST_REQUIRED
} from "home-assistant-js-websocket";
import {inc} from './counter';

export default async function connect(){
    let auth;
    try{
        auth = await getAuth();
    }catch(err) {
        if(err === ERR_HASS_HOST_REQUIRED){
            const hassUrl = 'https://demo.nt.t-bond.hu/';
            auth = await getAuth({hassUrl});
        }else{
            alert(`Unkown error: ${err}`);
            return;
        }

    }

    const connection = await createConnection({ auth });
    subscribeEntities(connection, ent => inc(ent));

    return connection;
}