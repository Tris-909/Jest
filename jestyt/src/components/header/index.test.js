import React from 'react';
import Header from './index';
import {findByTestAttr} from '../../Utils/UtilsTest';
import {shallow} from 'enzyme';

export const setup = (props={}) => {
    const wrapper = shallow(<Header {...props} />);
    return wrapper;
}

describe('Header Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    test("Rendering process of Header Component", () => {
        const HeaderComponent = findByTestAttr(wrapper, 'header-component');
        expect(HeaderComponent.length).toBe(1);
    });

    test("Rendering process of Logo", () => {
        const LogoTextComponent = findByTestAttr(wrapper, 'logo');
        expect(LogoTextComponent.length).toBe(1);
    });
});
