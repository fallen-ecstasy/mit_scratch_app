import { ADD_ACTION, UPDATE_ACTION } from "./types"


export const addAction = () =>{
    return {
        type : ADD_ACTION,
    }
}

export const updateAction = (actionId,animationSequence) => {
    return {
        type : UPDATE_ACTION,
        payload : {actionId,animationSequence},
    }
}