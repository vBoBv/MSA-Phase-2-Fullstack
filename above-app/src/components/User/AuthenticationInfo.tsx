import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	authenticationInfoContainer: {
		paddingLeft: '20rem',
		paddingRight: '20rem'
	},
	itemContainer: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '1rem'
	},
	text: {
		paddingLeft: '1rem'
	}
}));

const AuthenticationInfo = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			justify='center'
			direction='column'
			alignContent='center'
			className={classes.authenticationInfoContainer}>
			<Grid item className={classes.itemContainer}>
				<DoneOutlineIcon />
				<Typography className={classes.text}>
					In order to Sign Up, password must contain an uppercase character, lowercase character, a digit, and a
					non-alphanumeric character. Passwords must be at least six characters long.
				</Typography>
			</Grid>
			<Grid item className={classes.itemContainer}>
				<DoneOutlineIcon />
				<Typography className={classes.text}>
					As this site has not setup validations for authentication on the BackEnd, weak password will not be accepted
					by the system and no error information will be provided to the user as well.
				</Typography>
			</Grid>
			<Grid item className={classes.itemContainer}>
				<DoneOutlineIcon />
				<Typography className={classes.text}>Please carefully fill up the form in order to sign up or login</Typography>
			</Grid>

			<Grid item className={classes.itemContainer}>
				<DoneOutlineIcon />
				<Typography className={classes.text}>Sample Password: Th1$1$mypassw0rd, Pa$$w0rd</Typography>
			</Grid>
		</Grid>
	);
};

export default AuthenticationInfo;
