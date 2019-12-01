import { DASHBOARD, MAP, LOGBOOK, HISTORY, AUTOMATIONS } from '../actionTypes'

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
        case AUTOMATIONS: {
            return {
                currentPage: 'Automation'
            }
        }

        default:
            return state;
    }
    
}
