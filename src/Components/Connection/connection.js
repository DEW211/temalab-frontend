import {
	getAuth,
	createConnection,
	subscribeEntities,
	ERR_HASS_HOST_REQUIRED
} from 'home-assistant-js-websocket';

import { updateAction } from '../../Redux/Actions/updateAction';
import store from '../../Redux/store'

var single = 'undefined';

function dispatch(newState){
	console.log(newState);
	store.dispatch(updateAction(newState));
}

export default async function connect() {
	let auth;
	if (single === 'undefined') {
		try {
			auth = await getAuth();
		} catch (err) {
			if (err === ERR_HASS_HOST_REQUIRED) {
				const hassUrl = 'https://demo.nt.t-bond.hu/';
				auth = await getAuth({ hassUrl });
			} else {
				alert(`Unkown error: ${err}`);
				return;
			}
		}

		const connection = await createConnection({ auth });
		subscribeEntities(connection, entities => dispatch(entities)); //redux reducer call???
	}

	return;
}
