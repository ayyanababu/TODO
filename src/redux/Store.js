import { compose, createStore, applyMiddleware } from 'redux';
import AllCombinedReducers from './Reducers/RootReducer';
import logger from 'redux-logger';
const middleWares = [];

const configureStore = () => {
    //creating a store with reducers and middleWares
    middleWares.push(logger);
    const allMiddleWares = compose(applyMiddleware(...middleWares));
    const store = createStore(AllCombinedReducers, allMiddleWares);
    return { store };
  };

export default configureStore;