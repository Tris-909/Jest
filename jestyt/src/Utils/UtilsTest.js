export const findByTestAttr = (component, dataTestName) => {
    return component.find(`[data-test='${dataTestName}']`);
}