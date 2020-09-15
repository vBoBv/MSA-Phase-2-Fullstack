import React, { Fragment, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Particle from '../Particles/Particles';
import Typed from 'react-typed';
import WOW from 'wowjs';
import { Trans } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'absolute',
		top: '50%',
		right: '50%',
		transform: `translate(${50}%,${-50}%)`,
		color: 'white',
		zIndex: 1
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
			<Grid container className={classes.container} justify='center' alignItems='center' direction='column'>
				<Grid item>
					<Typography className={`${classes.pageHeading} wow fadeIn`}>
						<Trans>All in one dimension</Trans>
					</Typography>
				</Grid>
				<Grid item className={classes.pageSubHeading1}>
					--
					<Typed strings={['Browse - Buy - Auction--']} typeSpeed={60} startDelay={3500} showCursor={false} />
				</Grid>
			</Grid>
			<Particle />
		</Fragment>
	);
};

export default LandingPage;
