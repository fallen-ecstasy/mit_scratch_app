import { ADD_ACTION, UPDATE_ACTION } from '../actions/types';

const initialState = {
    actions: [],
    count : 0
  };
  const actionsReducer = (state = initialState, action) => {
    switch(action.type) {
      case ADD_ACTION:
        var tmp = [...state.actions];
        const newAction = {
            actionID : state.count,
            actionName : `Action ${state.count}`,
            actionSeq : [],
            actionloop : 0,
        }
        tmp.push(newAction);
        return {
            actions : tmp,
            count : state.count+1,
        }
        case UPDATE_ACTION:
            var tmp = [...state.actions];
            tmp[action.payload.actionId] = {
                ...tmp[action.payload.actionId],
                actionSeq: action.payload.animationSequence,
            }
            return {
                ...state,
                actions : tmp,
            }
      default:
        return state;
    }
  }
  export default actionsReducer;