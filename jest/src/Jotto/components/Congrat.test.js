import React from 'react';
import Congrat from './Congrat';
import {findByTestAttribute} from '../../test/Utiltests';
import {shallow} from 'enzyme';

const setUp = (props={}) => {
    return shallow(<Congrat {...props} />);
}

test("Render Congrat Component without errors", () => {
    const wrapper = setUp();
    const CongratComponent = findByTestAttribute(wrapper, 'congrat-component');
    expect(CongratComponent.length).toBe(1);
});

test("Render no text when `success` props is false", () => {
    const wrapper = setUp({success: false});
    const CongratComponentText = findByTestAttribute(wrapper, 'congrat-component').text();
    expect(CongratComponentText).toBe('');
});

test("render none empty congrat message", () => {
    const wrapper = setUp({ success: true });
    const CongratComponentText = findByTestAttribute(wrapper, 'congrat-component').text();
    expect(CongratComponentText.length).not.toBe(0);
});