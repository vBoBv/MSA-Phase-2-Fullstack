import React, { useEffect } from 'react';
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WOW from 'wowjs';
import Typed from 'react-typed';

import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
	navBarContainer: {
		position: 'absolute',
		color: '#FFFFFF',
		paddingTop: '1.5rem',
		fontFamily: 'Audiowide, cursive',
		fontSize: '2rem',
		paddingLeft: '2rem',
		zIndex: 1
	},
	logo: {
		width: '50px',
		height: '50px'
	},
	logoItem: {
		paddingLeft: '1rem'
	}
}));

const Header = () => {
	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, []);

	const classes = useStyles();

	return (
		<Grid container justify='flex-start' alignItems='center' className={classes.navBarContainer}>
			<Grid item className={classes.logoItem}>
				<img
					className={`${classes.logo} wow rollIn rotatingAnimation`}
					src={logo}
					alt='Logo'
					data-wow-duration='2s'
					data-wow-delay='1.5s'
				/>
			</Grid>
			<Grid item className={classes.logoItem}>
				<Typed strings={['Above']} typeSpeed={150} backSpeed={100} backDelay={10} smartBackspace />
			</Grid>
			<Grid item>
				<NavigationTabs />
			</Grid>
		</Grid>
	);
};

export default Header;
