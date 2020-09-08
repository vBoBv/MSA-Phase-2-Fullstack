import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import backgroundImg from '../../assets/space.jpg';

const useStyles = makeStyles((theme) => ({
	backgroundImage: {
		backgroundImage: `url(${backgroundImg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		position: 'relative',
		height: '100vh'
	}
}));

const LandingPage = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container className={classes.backgroundImage}>
			<div></div>
			<div></div>
		</Grid>
	);
};

export default LandingPage;
