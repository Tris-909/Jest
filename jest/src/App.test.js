import { render, screen } from '@testing-library/react';
import App from './App';

import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, {shallow} from 'enzyme';
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});
