import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from '../LandingPage';
import Particles from '../../Particles/Particles';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<LandingPage />);
});

it('shows a Header component', () => {
	expect(wrapped.find(Particles).length).toEqual(1);
});
