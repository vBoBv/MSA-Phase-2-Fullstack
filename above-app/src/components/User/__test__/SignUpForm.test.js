import React from 'react';
import { mount } from 'enzyme';

import SignUpForm from '../SignUpForm';

let wrapped;

beforeEach(() => {
	wrapped = mount(<SignUpForm />);
});

afterEach(() => {
	wrapped.unmount();
});

it('has four inputs and one button', () => {
	expect(wrapped.find('input').length).toEqual(4);
	expect(wrapped.find('button').length).toEqual(1);
});
