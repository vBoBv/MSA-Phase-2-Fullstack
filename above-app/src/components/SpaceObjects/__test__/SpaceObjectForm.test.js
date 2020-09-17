import React from 'react';
import { shallow } from 'enzyme';

import SpaceObjectForm from '../SpaceObjectForm';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<SpaceObjectForm />);
});

xit('renders two inputs, one textarea, one button', () => {
	expect(wrapped.find(input).length).toEqual(2);
	expect(wrapped.find(textarea).length).toEqual(1);
	expect(wrapped.find(button).length).toEqual(1);
});
