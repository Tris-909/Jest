import React from 'react';
import Counter from './Counter';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, {shallow} from 'enzyme';

//Setting up enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

const getComponent = (attr) => {
    const wrapper = shallow(<Counter />);
    return wrapper.find(`[data-test='${attr}']`);
}


describe("Testing rendering process", () => {
    test("render without errors", () => {
        const appComponent = getComponent('component-app');
        expect(appComponent.length).toBe(1);
    });
    
    test("render increment button", () => {
        const incrementButton = getComponent('increment-button');
        expect(incrementButton.length).toBe(1);
    });
    
    test("render counter display", () => {
        const counterComponent = getComponent('component-counter');
        expect(counterComponent.length).toBe(1);
    });

    test("render decrement button", () => {
        const decrementButton = getComponent('decrement-button');
        expect(decrementButton.length).toBe(1);
    });
});


test("update starts at 0", () => {
    const CounterValueComponent = getComponent('counter-value');
    expect(CounterValueComponent.text()).toBe('1');
});

test("clicking on button increment counter display", () => {
    const wrapper = shallow(<Counter />);
    const IncrementButton = wrapper.find("[data-test='increment-button']");
    IncrementButton.simulate('click');
    const CounterValue = wrapper.find("[data-test='counter-value']").text();
    expect(CounterValue).toBe('2');
});

test("clicking on decrement button will decrease counter display value by 1", () => {
    const wrapper = shallow(<Counter />);
    // find the decrement button
    const decrementButton = wrapper.find("[data-test='decrement-button']");
    expect(decrementButton.length).toBe(1);

    // click on decrement button
    decrementButton.simulate('click');

    // check if the counter value is -1 if we first click it
    const CounterValue = wrapper.find("[data-test='counter-value']");
    expect(CounterValue.text()).toBe("0");
});

test("Showing Error when counter value is equal to 0 and stop user decreasing value", () => {
    const wrapper = shallow(<Counter />);
    // find decrease button & increase button
    const decreaseButton = wrapper.find("[data-test='decrement-button']");
    expect(decreaseButton.length).toBe(1);
    const incrementButton = wrapper.find("[data-test='increment-button']");
    expect(incrementButton.length).toBe(1);

    // click on decrease button and decrease the counter value to 0
    decreaseButton.simulate('click');
    const CounterValue = wrapper.find("[data-test='counter-value']");
    expect(CounterValue.text()).toBe("0");

    // if counter value is 0 then show the warning
    const warningText = wrapper.find("[data-test='warning-text']");
    expect(warningText.length).toBe(1);

    // stop the counter drop below 0 when you click decrease button it again
    const newDecreaseButton = wrapper.find("[data-test='decrement-button']");
    newDecreaseButton.simulate('click');
    const newCounterValue = wrapper.find("[data-test='counter-value']");
    expect(newCounterValue.text()).toBe("0");

    // increase by 1 again and check if warning length === 0
    const newIncreaseButton = wrapper.find("[data-test='increment-button']");
    newIncreaseButton.simulate('click');
    const CounterValueAfterIncrease =  wrapper.find("[data-test='counter-value']");
    expect(CounterValueAfterIncrease.text()).toBe("1");
    const newWarningText = wrapper.find("[data-test='warning-text']");
    expect(newWarningText.length).toBe(0);
});