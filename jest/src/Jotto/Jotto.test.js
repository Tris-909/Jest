import React from 'react';
import Jotto from './Jotto';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, {shallow} from 'enzyme';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Delete this", () => {});