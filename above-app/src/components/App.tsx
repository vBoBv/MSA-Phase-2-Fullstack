import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<Header />
			<LandingPage />
		</div>
	);
};

export default App;
