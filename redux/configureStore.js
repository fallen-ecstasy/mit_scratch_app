import { combineReducers, createStore } from 'redux';
import actionsReducer from './reducers/actionsReducer';
import mainActionReducer from './reducers/mainActionReducer';
import spritesReducer from './reducers/spritesReducer';

const rootReducer = combineReducers({
  sprites : spritesReducer,
  actions : actionsReducer,
  mainAction : mainActionReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;