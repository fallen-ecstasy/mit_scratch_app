import { UPDATE_ACTION } from '../actions/types';

const initialState = {
    action1 : [],
    action2 : [],
  };
  const actionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_ACTION:
            if(action.payload.actionId === "1"){
              return {
                ...state,
                action1: action.payload.animationSequence,
              }
            }else{
              return {
                ...state,
                action2: action.payload.animationSequence,
              }
            }
      default:
        return state;
    }
  }
  export default actionsReducer;