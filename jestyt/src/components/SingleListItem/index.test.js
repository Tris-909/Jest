import React from 'react';
import ListItem from './index';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../Utils/UtilsTest';

const setup = (props = {}) => {
    return shallow(<ListItem {...props} />);
}

describe("List Item", () => {
    describe('Component Render with full Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Test',
                paragraph: 'String'
            }
            wrapper = setup(props);
        });

        test('Single List Item render without error', () => {
            const SingleListItem = findByTestAttr(wrapper, 'single-listitem');
            expect(SingleListItem.length).toBe(1);
        });

        test("Title Render", () => {
            const Title = findByTestAttr(wrapper, 'title');
            expect(Title.length).toBe(1);
        });

        test("Paragraph Render", () => {
            const Paragraph = findByTestAttr(wrapper, 'paragraph');
            expect(Paragraph.length).toBe(1);
        });
    });

    describe("Component Render when Missing Title or Paragraph", () => {
        let wrapper;
        beforeEach(() => {
            const props = {};
            wrapper = setup(props);
        });

        test("Render Null for the whole component when there is no `title` props", () => {
            const SingleListItem = findByTestAttr(wrapper, 'single-listitem');
            expect(SingleListItem.length).toBe(0);
        });
    })
});