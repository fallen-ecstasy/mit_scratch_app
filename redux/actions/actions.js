import { UPDATE_ACTION } from "./types"

export const updateAction = (actionId,animationSequence) => {
    return {
        type : UPDATE_ACTION,
        payload : {actionId,animationSequence},
    }
}