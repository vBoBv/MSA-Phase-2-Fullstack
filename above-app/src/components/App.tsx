import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Particle from './Particles/Particles';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<Header />
			<LandingPage />
			<Particle />
		</div>
	);
};

export default App;
