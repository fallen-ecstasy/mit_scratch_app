import uuid from 'react-native-uuid';
import { ADD_SPRITE, DELETE_SPRITE, UPDATE_SPRITEACTION, UPDATE_SPRITE_POS } from "../actions/types";

// SPRITE:
//  - spriteID
//  - spriteType
//  - spriteAction

const initialState = {sprite:[
    {
        spriteID : uuid.v4(),
        spriteType : "pico",
        spriteAction : null,
        spritePos: {x:"0",y:"0"},
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
                spritePos: {x:0,y:0},
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
        case UPDATE_SPRITE_POS:
            const i = state.sprite.indexOf(action.payload.sprite);
            temp = [...state.sprite];
            if(i > -1) temp[i] = {...temp[i],
            spritePos : action.payload.pos}
            return{
                ...state,
                sprite: temp,
            }
            default:
                return state;
    }
}

export default spritesReducer;