// import React from 'react';
// import Counter from './Counter';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
// import Enzyme, {shallow} from 'enzyme';

// Enzyme.configure({ adapter: new EnzymeAdapter() });

// const setUp = () => {
//     return shallow(<Counter />);
// }

// const findByAttributes = (wrapper, attr) => {
//     return wrapper.find(`[data-test='${attr}']`);
// }

// describe('render components process...', () => {
//     test("render Counter Component without errors", () => {
//         const wrapper = setUp();
//         const AppComponent = findByAttributes(wrapper, 'app-component');
//         expect(AppComponent.length).toBe(1);
//     });

//     test("render Counter Display", () => {
//         const wrapper = setUp();
//         const CounterDisplay = findByAttributes(wrapper, 'counter-display');
//         expect(CounterDisplay.length).toBe(1);
//     });

//     test("render Counter Value and Counter Vaue is equal to 0", () => {
//         const wrapper = setUp();
//         const CounterValue = findByAttributes(wrapper, 'counter-value');
//         expect(CounterValue.text()).toBe("0");
//     });

//     test("render Counter Increment Button", () => {
//         const wrapper = setUp();
//         const IncrementButton = findByAttributes(wrapper, 'increment');
//         expect(IncrementButton.length).toBe(1);
//     });

//     test("render Counter Decrement Button", () => {
//         const wrapper = setUp();
//         const DecrementButton = findByAttributes(wrapper, 'decrement');
//         expect(DecrementButton.length).toBe(1);
//     });
// });

// describe("Testing Increment Function", () => {
//     test("Click Increment Button will the counter value is equal to 1", () => {
//         // Check for Increment Button Exist and Click Increment Button
//         const wrapper = setUp();
//         const Increment = findByAttributes(wrapper, 'increment');
//         expect(Increment.length).toBe(1);
//         Increment.simulate('click');

//         // Check if Counter display value is equal to 1
//         const Value = findByAttributes(wrapper, 'counter-value');
//         expect(Value.text()).toBe("1"); 
//     });
// });

// describe("Testing Decrement Function", () => {
//     test("Click Decrement Button will the counter value is equal to -1", () => {
//         // Click Decrement Button
//         const wrapper = setUp();
//         const Decrement = findByAttributes(wrapper, 'decrement');
//         Decrement.simulate('click');

//         // Counter Value is equal to -1
//         const Value = findByAttributes(wrapper, 'counter-value');
//         expect(Value.text()).toBe("0");    
//     });
// });

// describe("Testing for warning text and remove it if certain of actions taken", () => {
//     test("Show warning text if neccessary, stop user from decreasing counter value below 0 and delete warning text if user click on increment button", () => {
//         const wrapper = setUp();
//         // Click Increment button and click decrement button as well to reducer counter value is equal to 0
//         const Increment = findByAttributes(wrapper, 'increment');
//         Increment.simulate('click');
//         const Decrement = findByAttributes(wrapper, 'decrement');
//         Decrement.simulate('click');

//         // when counter value is equal to 0 show warning text
//         const Value = findByAttributes(wrapper, 'counter-value');
//         expect(Value.text()).toBe("0");
//         const Warning = findByAttributes(wrapper, 'warning-text');
//         expect(Warning.length).toBe(1);

//         // click decrement button again and make sure counter value still remain 0
//         Decrement.simulate('click');
//         expect(Value.text()).toBe("0");

//         // click the increment button again and make sure warning text have gone away
//         Increment.simulate('click');
//         const NewValue = findByAttributes(wrapper, 'counter-value');
//         expect(NewValue.text()).toBe("1");
//         const CheckWarning = findByAttributes(wrapper, 'warning-text');
//         expect(CheckWarning.length).toBe(0);
//     });
// });

test("Checking...", () => {});
//! COMMENT THEM ALL TO ONLY RUN JOTTO TESTS