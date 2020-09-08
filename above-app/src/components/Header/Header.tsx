import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WOW from 'wowjs';

import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
	navBarContainer: {
		position: 'absolute',
		color: '#FFFFFF',
		paddingTop: '2rem'
	},
	logo: {
		width: '80px',
		height: '80px'
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
		<Grid container justify='center' className={classes.navBarContainer}>
			<Grid item>
				<img
					className={`${classes.logo} wow flipInX`}
					src={logo}
					alt='Logo'
					data-wow-duration='infinite'
					data-wow-delay='.5s'
				/>
			</Grid>
		</Grid>
	);
};

export default Header;
