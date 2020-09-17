import React from 'react';
import { shallow } from 'enzyme';

import SpaceObjectCreate from '../SpaceObjectCreate';
import SpaceObjectForm from '../SpaceObjectForm';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<SpaceObjectCreate />);
});

it('renders a SpaceObjectForm', () => {
	expect(wrapped.find(SpaceObjectForm).length).toEqual(1);
});
