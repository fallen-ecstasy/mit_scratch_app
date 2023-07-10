import { PLAY_ACTION, RESET_ACTION, UPDATE_MAIN_ACTION } from "../actions/types"

const initialState = {
    actionList:[],
    play:0,
}

const mainActionReducer = (state = initialState,action) =>{
    switch(action.type){
        case PLAY_ACTION:
            return{
                ...state,
                play:1,
            }
        case RESET_ACTION:
            return{
                ...state,
                play:0,
            }
        case UPDATE_MAIN_ACTION:
            return {
                ...state,
                actionList : action.payload,
                play:0,
            }
        default:
            return state;
    }
}

export default mainActionReducer;