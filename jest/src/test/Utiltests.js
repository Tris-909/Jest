import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../configureStore';
import rootReducer from '../reducers/index';

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}

export const findByTestAttribute = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}