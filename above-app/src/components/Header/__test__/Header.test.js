import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';
import NavigationTabs from '../../NavigationTabs/NavigationTabs';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<Header />);
});

it('shows a Header component', () => {
	expect(wrapped.find(NavigationTabs).length).toEqual(1);
});
