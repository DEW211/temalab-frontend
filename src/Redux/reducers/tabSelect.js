import { DASHBOARD, MAP, LOGBOOK, HISTORY } from '../actionTypes'

const initialState = {currentPage: "Dashboard"};

export default function(state = initialState, action){
    switch(action.type){
        case DASHBOARD: {
            return {
                
                currentPage: 'Dashboard'
            }
        }
        case MAP: {
            return {
                
                currentPage: 'Map'
            }
        }
        case LOGBOOK: {
            return {
                
                currentPage: 'Logbook'
            }
        }
        case HISTORY: {
            return {
                
                currentPage: 'History'
            }
        }

        default:
            return state;
    }
    
}
