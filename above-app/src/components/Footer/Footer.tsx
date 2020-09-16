import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footer: {
			padding: '1rem'
		}
	})
);

const Footer = () => {
	const classes = useStyles();

	return (
		<Grid container justify='center' className={classes.footer}>
			<Grid item>
				<Typography align='center'>Microsoft Student Accelarator 2020 / Phase 2</Typography>
				<Typography align='center'>&copy; All Rights Reserved By Ponhvath Vann</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
