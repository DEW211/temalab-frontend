import { NEW_STATE } from '../actionTypes';

const initialState = {}
export default function(state = initialState, action) {
	switch (action.type) {
		case NEW_STATE: {
			return action.payload;
		}

		default:
			return state;
	}
}
