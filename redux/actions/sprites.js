import { ADD_SPRITE, DELETE_SPRITE, UPDATE_SPRITEACTION } from './types';

export const addSprite = (spriteType) => {
  return {
    type: ADD_SPRITE,
    payload: spriteType
  }
}

export const deleteSprite = (sprite) => {
    return {
        type: DELETE_SPRITE,
        payload: sprite,
    }
}

export const updateSprite = (spriteID, actionID) => {
    return {
        type: UPDATE_SPRITEACTION,
        payload : {spriteID,actionID}
    }
}