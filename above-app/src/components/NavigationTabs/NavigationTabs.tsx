import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	tabsContainer: {
		width: 700
	},
	tab: {
		fontSize: '1rem'
	},
	link: {
		color: 'inherit',
		textDecoration: 'none'
	}
}));

const NavigationTabs = () => {
	const classes = useStyles();

	return (
		<Grid container justify='space-evenly' className={classes.tabsContainer}>
			<Grid item className={classes.tab}>
				<Link to='/' className={classes.link}>
					Home
				</Link>
			</Grid>
			<Grid item className={classes.tab}>
				<Link to='/acquiredobjects' className={classes.link}>
					I/UFO
				</Link>
			</Grid>
			<Grid item className={classes.tab}>
				Auction
			</Grid>
			<Grid item className={classes.tab}>
				Join us
			</Grid>
		</Grid>
	);
};

export default NavigationTabs;
