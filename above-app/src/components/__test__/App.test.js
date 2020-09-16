import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../Header/Header';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
});

it('shows a Header component', () => {
	expect(wrapped.find(Header).length).toEqual(1);
});

xit('shows a Footer component', () => {
	expect(wrapped.find(Footer).length).toEqual(1);
});
