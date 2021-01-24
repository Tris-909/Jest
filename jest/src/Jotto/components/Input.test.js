import Input from './Input'; 
import React from 'react';
import {shallow} from 'enzyme';
import {storeFactory, findByTestAttribute} from '../../test/Utiltests';

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false};
            wrapper = setup(initialState);
        });

        test("render component without errors", () => {
            const component = findByTestAttribute(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test("render input box", () => {
            const input = findByTestAttribute(wrapper, 'input');
            expect(input.length).toBe(1);
        });

        test("render submit button", () => {
            const submitButton = findByTestAttribute(wrapper, 'submit');
            expect(submitButton.length).toBe(1);
        });
    });

    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: true};
            wrapper = setup(initialState);
        });

        test("render component without errors", () => {
            const component = findByTestAttribute(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });

        test("DOES NOT render input box", () => {
            const input = findByTestAttribute(wrapper, 'input');
            expect(input.length).toBe(0);
        });

        test("DOES NOT render submit button", () => {
            const submit = findByTestAttribute(wrapper, 'submit');
            expect(submit.length).toBe(0);
        });
    });
});

describe('update state', () => {

});