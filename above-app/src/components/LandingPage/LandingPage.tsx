import React, { Fragment, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Particle from '../Particles/Particles';
import Typed from 'react-typed';
import WOW from 'wowjs';

import backgroundImg from '../../assets/space.jpg';

const useStyles = makeStyles((theme) => ({
	backgroundImage: {
		backgroundImage: `url(${backgroundImg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		position: 'relative',
		height: '100vh',
		zIndex: -2,
		color: 'white'
	},
	pageSubHeading1: {
		fontFamily: 'Bungee Hairline, cursive',
		fontSize: '3rem'
	},
	pageHeading: {
		// fontFamily: 'Cinzel Decorative, cursive',
		// fontFamily: 'Patua One, cursive',
		fontFamily: 'Nova Cut, cursive',
		fontSize: '5rem'
	}
}));

const LandingPage = () => {
	const classes = useStyles();
	const theme = useTheme();

	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, []);

	return (
		<Fragment>
			<Particle />
			<Grid container className={classes.backgroundImage} justify='center' alignItems='center' direction='column'>
				<Grid item>
					<Typography className={`${classes.pageHeading} wow fadeIn`}>All in one Dimension</Typography>
				</Grid>
				<Grid item className={classes.pageSubHeading1}>
					--
					<Typed strings={['Browse - Buy - Auction--']} typeSpeed={60} startDelay={3500} showCursor={false} />
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default LandingPage;
