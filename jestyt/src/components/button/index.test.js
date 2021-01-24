import React from 'react';
import Button from './index';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../Utils/UtilsTest';

const setup = (props={}) => {
    return shallow(<Button {...props} />);
}

describe('SharedButton', () => {
    describe('Render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Test',
                emitEvent: () => {}
            };
            wrapper = setup(props);
        });

        test("Render A Button", () => {
            const button = findByTestAttr(wrapper, 'component-button');
            expect(button.length).toBe(1);
        });
    })
})