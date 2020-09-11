import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import AcquiredObjects from './AcquiredObjects/AcquiredObjects';
import SpaceObjects from './SpaceObjects/SpaceObjects';
import SpaceObjectCreate from './SpaceObjects/SpaceObjectCreate';

import './App.css';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/acquiredobjects' component={AcquiredObjects} />
					<Route exact path='/spaceobjects' component={SpaceObjects} />
					<Route exact path='/spaceobjects/create' component={SpaceObjectCreate} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
