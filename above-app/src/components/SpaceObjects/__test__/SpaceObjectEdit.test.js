import React from 'react';
import { shallow } from 'enzyme';

import SpaceObjectEdit from '../SpaceObjectEdit';
import SpaceObjectForm from '../SpaceObjectForm';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<SpaceObjectEdit />);
});

xit('renders a SpaceObjectForm', () => {
	expect(wrapped.find(SpaceObjectForm).length).toEqual(1);
});
