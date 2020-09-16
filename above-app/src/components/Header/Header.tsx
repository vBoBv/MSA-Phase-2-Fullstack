import React, { useEffect } from 'react';
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WOW from 'wowjs';
import Typed from 'react-typed';
import { IUser } from '../../common/Interfaces';

import logo from '../../assets/logo.png';

interface IHeaderProps {
	user: IUser | null;
	setUser: (user: IUser | null) => void;
}

const useStyles = makeStyles((theme) => ({
	navBarContainer: {
		position: 'absolute',
		color: '#FFFFFF',
		paddingTop: theme.spacing(4),
		fontFamily: 'Audiowide, cursive',
		fontSize: '2rem',
		zIndex: 1,
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem'
		}
	},
	logoContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		paddingLeft: theme.spacing(4)
	},
	logo: {
		width: '50px',
		height: '50px',
		[theme.breakpoints.down('sm')]: {
			width: '30px',
			height: '30px'
		}
	},
	logoItem: {
		paddingLeft: theme.spacing(1)
	},
	navigationTabs: {
		[theme.breakpoints.down('sm')]: {
			paddingTop: '1rem'
		}
	}
}));

const Header: React.FC<IHeaderProps> = ({ user, setUser }) => {
	useEffect(() => {
		new WOW.WOW({
			live: false
		}).init();
	}, []);

	const classes = useStyles();
	const theme = useTheme();
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
	const isScreenXSmall = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Grid
			container
			justify='space-between'
			alignItems='center'
			direction={isScreenSmall || isScreenXSmall ? 'column' : 'row'}
			className={classes.navBarContainer}>
			<Grid item className={classes.logoContainer}>
				<Grid item>
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
			</Grid>

			<Grid item className={classes.navigationTabs}>
				<NavigationTabs user={user} setUser={setUser} />
			</Grid>
		</Grid>
	);
};

export default Header;
