import checkPropTypes from 'check-prop-types';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../store/index';
import {middlewares} from '../createStore';

export const findByTestAttr = (component, dataTestName) => {
    return component.find(`[data-test='${dataTestName}']`);
}

export const returnPropsTypesError = (ComponentPropTypes, expectedProps, ComponentName) => {
    return checkPropTypes(ComponentPropTypes, expectedProps, 'props', ComponentName);
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}