import { ADD_SPRITE, DELETE_SPRITE, UPDATE_SPRITEACTION, UPDATE_SPRITE_POS } from './types';

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

export const updateSpritePos = (sprite, pos) => {
  return {
      type: UPDATE_SPRITE_POS,
      payload : {sprite,pos}
  }
}

