import React from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	authenticationInfoContainer: {
		paddingLeft: '20rem',
		paddingRight: '20rem',
		[theme.breakpoints.down('lg')]: {
			paddingLeft: '15rem',
			paddingRight: '15rem'
		},
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '2rem'
		}
	},
	itemContainer: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '1rem'
	},
	text: {
		paddingLeft: '1rem',
		fontSize: '1rem'
	}
}));

const AuthenticationInfo = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isScreenLarge = useMediaQuery(theme.breakpoints.down('lg'));
	const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

	const renderSampleAccountText = () => {
		return (
			<Grid item className={classes.itemContainer}>
				<DoneOutlineIcon />
				<Typography className={classes.text}>Sample Account: test@test.com, Pw: Pa$$w0rd</Typography>
			</Grid>
		);
	};

	const renderInfo1 = () => {
		return (
			<Grid item className={classes.itemContainer}>
				<DoneOutlineIcon />
				<Typography className={classes.text}>
					In order to Sign Up, password must contain an uppercase character, lowercase character, a digit, and a
					non-alphanumeric character. Passwords must be at least six characters long.
				</Typography>
			</Grid>
		);
	};

	const renderInfo2 = () => {
		return (
			<Grid item className={classes.itemContainer}>
				<DoneOutlineIcon />
				<Typography className={classes.text}>
					As this site has not setup validations for authentication on the BackEnd, weak password will not be accepted
					by the system and no error information will be provided to the user as well.
				</Typography>
			</Grid>
		);
	};

	const renderInfo3 = () => {
		return (
			<Grid item className={classes.itemContainer}>
				<DoneOutlineIcon />
				<Typography className={classes.text}>Please carefully fill up the form in order to sign up or login</Typography>
			</Grid>
		);
	};

	return (
		<React.Fragment>
			{isScreenSmall ? null : (
				<Grid
					container
					justify='center'
					direction={'column'}
					alignContent='center'
					className={classes.authenticationInfoContainer}>
					{isScreenSmall ? (
						renderSampleAccountText()
					) : isScreenMedium || isScreenLarge ? (
						<React.Fragment>
							{renderInfo1()} {renderSampleAccountText()}
						</React.Fragment>
					) : (
						<React.Fragment>
							{renderInfo1()}
							{renderInfo2()}
							{renderInfo3()}
							{renderSampleAccountText()}
						</React.Fragment>
					)}
				</Grid>
			)}
		</React.Fragment>
	);
};

export default AuthenticationInfo;
