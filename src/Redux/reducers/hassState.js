import { NEW_STATE } from '../actionTypes';

const initialState = {}
export default function(state = initialState, action) {
	switch (action.type) {
		case NEW_STATE: {
			return {
				...action.payload,
				switches: mapObjectForSwitches(action.payload),
				automations: mapObjectForAutomations(action.payload)
			}
		}

		default:
			return state;
	}
}

function mapObjectForSwitches(stateObject){
	var regex = /switch./;
	var res = [];
	Object.keys(stateObject).map(value => {
		if(value.match(regex) !== null){
			res.push(value);
			
		}
	})
	return res;
}

function mapObjectForAutomations(stateObject){
	var regex = /automation./;
	var res = [];
	Object.keys(stateObject).map(value => {
		if(value.match(regex) !== null){
			res.push(value);
			
		}
	})
	return res;
}
