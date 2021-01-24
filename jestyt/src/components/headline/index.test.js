import React from 'react';
import Headline from './index';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../Utils/UtilsTest';

const setup = (props={}) => {
    return shallow(<Headline {...props} />);
}

describe('Headline Component', () => {
    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Testing',
                desc: 'Test Desc'
            }
            wrapper = setup(props);
        });
        
        test("Render without errors", () => {
            const HeadlineComponent = findByTestAttr(wrapper, 'headline-component');
            expect(HeadlineComponent.length).toBe(1);  
        });

        test("Render header props without errors", () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        test("Render desc without errors", () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have No Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });

        test("NOT Render Headline Component",() => {
            const HeadlineComponent = findByTestAttr(wrapper, 'headline-component');
            expect(HeadlineComponent.length).toBe(0);
        });
        test("NOT Render Header Props of Headline Component",() => {
            const Header = findByTestAttr(wrapper, 'header');
            expect(Header.length).toBe(0);
        });
        test("NOT Render Desc Props of Headline Component",() => {
            const Desc = findByTestAttr(wrapper, 'desc');
            expect(Desc.length).toBe(0);
        });
    });
});