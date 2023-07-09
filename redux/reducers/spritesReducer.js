import uuid from 'react-native-uuid';
import { ADD_SPRITE, DELETE_SPRITE, UPDATE_SPRITEACTION } from "../actions/types";

// SPRITE:
//  - spriteID
//  - spriteType
//  - spriteAction

const initialState = {sprite:[
    {
        spriteID : uuid.v4(),
        spriteType : "pico",
        spriteAction : null,
    }
]}

const spritesReducer = (state = initialState, action) => {
    let temp;
    switch(action.type){
        case ADD_SPRITE:
            temp = [...state.sprite];
            const newSprite ={
                spriteID : uuid.v4(),
                spriteType : action.payload,
                spriteAction : null,
            }
            temp.push(newSprite);
            return {
                ...state,
                sprite : temp,
            };
        case UPDATE_SPRITEACTION:
            const spriteInd = state.sprite.findIndex(item => item.spriteID === action.payload.spriteID);
            temp = [...state.sprite];
            temp[spriteInd] = {
                ...temp[spriteInd],
                spriteAction: action.payload.actionID,
            }
            return {
                ...state,
                sprite: temp,
            }
        case DELETE_SPRITE:
            const ind = state.sprite.indexOf(action.payload);
            temp = [...state.sprite];
            if(ind > -1) temp.splice(ind,1);
            return{
                ...state,
                sprite: temp,
            }
            default:
                return state;
    }
}

export default spritesReducer;