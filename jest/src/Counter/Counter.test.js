import Counter from './Counter';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, {shallow} from 'enzyme';

//Setting up enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render without errors", () => {
    const wrapper = shallow(<Counter />);
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
});

test("render buttons", () => {

});

test("render counter display", () => {

});

test("update starts at 0", () => {

});

test("clicking on button increment counter display", () => {

});