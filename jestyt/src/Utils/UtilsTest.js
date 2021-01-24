import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, dataTestName) => {
    return component.find(`[data-test='${dataTestName}']`);
}

export const returnPropsTypesError = (ComponentPropTypes, expectedProps, ComponentName) => {
    return checkPropTypes(ComponentPropTypes, expectedProps, 'props', ComponentName);
}