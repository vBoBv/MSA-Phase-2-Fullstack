import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Particle from './Particles/Particles';
import AcquiredObjects from './AcquiredObjects/AcquiredObjects';

import './App.css';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/items' component={AcquiredObjects} />
				</Switch>
			</BrowserRouter>
			<Particle />
		</div>
	);
};

export default App;
