import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { IUser } from '../../common/Interfaces';
import backgroundImage from '../../assets/spaceObjects.jpg';
import AuthenticationInfo from './AuthenticationInfo';

interface IJoinUsProps {
	setUser: (user: IUser) => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		joinusContainer: {
			paddingTop: '10rem',
			backgroundImage: `url(${backgroundImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'top',
			position: 'relative',
			height: '100vh',
			color: 'white'
		},
		formContainer: {
			padding: '2rem'
		}
	})
);

const JoinUs: React.FC<IJoinUsProps> = ({ setUser }) => {
	const classes = useStyles();

	return (
		<div className={classes.joinusContainer}>
			<Grid container justify='center'>
				<Typography align='center' variant='h5'>
					Come on board
				</Typography>
			</Grid>
			<Grid container direction='row' justify='center' alignContent='center'>
				<Grid item className={classes.formContainer}>
					<Grid container justify='center' direction='column' alignContent='center'>
						<Grid item>
							<Typography variant='h6' align='center' gutterBottom={true}>
								Sign Up
							</Typography>
						</Grid>
						<Grid item>
							<SignUpForm setUser={setUser} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.formContainer}>
					<Grid container justify='flex-start' direction='column' alignContent='center'>
						<Grid item>
							<Typography variant='h6' align='center' gutterBottom={true}>
								Login
							</Typography>
						</Grid>
						<LoginForm setUser={setUser} />
					</Grid>
				</Grid>
			</Grid>
			<AuthenticationInfo />
		</div>
	);
};

export default JoinUs;
