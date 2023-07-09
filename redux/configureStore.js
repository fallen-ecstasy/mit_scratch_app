import { combineReducers, createStore } from 'redux';
import actionsReducer from './reducers/actionsReducer';
import spritesReducer from './reducers/spritesReducer';

const rootReducer = combineReducers({
  sprites : spritesReducer,
  actions : actionsReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;