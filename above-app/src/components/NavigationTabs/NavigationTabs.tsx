import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { IUser } from '../../common/Interfaces';
import history from '../history';
import { Trans } from 'react-i18next';

interface INavigationProps {
	user: IUser | null;
	setUser: (user: IUser | null) => void;
}

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
	},
	button: {
		color: 'inherit'
	}
}));

const NavigationTabs: React.FC<INavigationProps> = ({ user, setUser }) => {
	const classes = useStyles();

	const logout = () => {
		window.localStorage.setItem('jwt', null!);
		setUser(null);
		history.push('/');
	};

	return (
		<React.Fragment>
			<Grid container justify='space-evenly' className={classes.tabsContainer}>
				<Grid item className={classes.tab}>
					<Link to='/' className={classes.link}>
						<Trans>Home</Trans>
					</Link>
				</Grid>
				<Grid item className={classes.tab}>
					<Link to='/acquiredobjects' className={classes.link}>
						<Trans>I/UFO</Trans>
					</Link>
				</Grid>
				<Grid item className={classes.tab}>
					<Trans>Auction</Trans>
				</Grid>
				<Grid item className={classes.tab}>
					<Link to='/signup' className={classes.link}>
						<Trans>Join us</Trans>
					</Link>
				</Grid>
				{user ? (
					<Fragment>
						<Grid item className={classes.tab}>
							{user.name}
						</Grid>
						<Grid item className={classes.tab}>
							<Button onClick={logout} className={classes.button}>
								Logout
							</Button>
						</Grid>
					</Fragment>
				) : null}
			</Grid>
		</React.Fragment>
	);
};

export default NavigationTabs;
