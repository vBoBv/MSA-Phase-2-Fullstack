import React from 'react';
import { mount } from 'enzyme';

import LoginForm from '../LoginForm';

let wrapped;

beforeEach(() => {
	wrapped = mount(<LoginForm />);
});

afterEach(() => {
	wrapped.unmount();
});

it('has two inputs and one button', () => {
	expect(wrapped.find('input').length).toEqual(2);
	expect(wrapped.find('button').length).toEqual(1);
});

// xit('has one email input that users can type in', () => {
// 	// wrapped
// 	// 	.find('input')
// 	// 	.at(0)
// 	// 	.simulate('change', {
// 	// 		target: { value: 'pvann@email.com' }
// 	// 	});
// 	// // wrapped.update();

// 	// expect(wrapped.find('input').at(0).prop('value')).toEqual('pvann@email.com');

// 	wrapped
// 		.find('input')
// 		.at(0)
// 		.simulate('change', {
// 			target: { value: 'pvann@email.com' }
// 		});

// 	expect(wrapped.find('input').at(0).prop('value')).toEqual('');
// });

// xit('has one password input that users can type in', () => {
// 	wrapped
// 		.find('input')
// 		.at(1)
// 		.simulate('change', {
// 			target: { value: 'Th1$i$myPaffword' }
// 		});
// });

// xit('when form is submitted, username input is emptied', () => {
// 	wrapped
// 		.find('input')
// 		.at(0)
// 		.simulate('change', {
// 			target: { name: 'email', value: 'pvann@email.com' }
// 		});
// 	wrapped.update();

// 	expect(wrapped.find('input').at(0).prop('value')).to.equal('pvann@email.com');
// 	wrapped.find('form').simulate('submit');
// 	wrapped.update();
// 	expect(wrapped.find('input').at(0).prop('value')).toEqual('');
// });
