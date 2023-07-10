import { PLAY_ACTION, RESET_ACTION, UPDATE_MAIN_ACTION } from "./types"

export const playAction = () => {
    return {
        type: PLAY_ACTION,
    }
}

export const resetAction = () => {
    return {
        type: RESET_ACTION,
    }
}

export const updateAction = (mainAction) => {
    return {
        type: UPDATE_MAIN_ACTION,
        payload : mainAction,
    }
}