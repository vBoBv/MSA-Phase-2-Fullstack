import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Particle from '../Particles/Particles';

import backgroundImg from '../../assets/space.jpg';

const useStyles = makeStyles((theme) => ({
	backgroundImage: {
		backgroundImage: `url(${backgroundImg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		position: 'relative',
		height: '100vh',
		zIndex: -2
	}
}));

const LandingPage = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Fragment>
			<Particle />
			<Grid container className={classes.backgroundImage}>
				<div></div>
				<div></div>
			</Grid>
		</Fragment>
	);
};

export default LandingPage;
