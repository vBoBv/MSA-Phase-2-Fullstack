import React, { useState, useEffect } from 'react';
import { IItem } from '../../common/Interfaces';
import Api from '../api/Api';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import backgroundImage from '../../assets/spaceObjects.jpg';
import logo from '../../assets/logo.png';

interface IRouteComponentMatchParamProps {
	id: string;
}

const useStyles = makeStyles((theme) => ({
	spaceShowContainer: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		position: 'relative',
		paddingTop: '10rem',
		height: '100vh',
		color: 'white'
	},
	image: {
		width: 500,
		height: 500,
		[theme.breakpoints.down('md')]: {
			width: 400,
			height: 400
		},
		[theme.breakpoints.down('sm')]: {
			width: 300,
			height: 300
		},
		[theme.breakpoints.down('xs')]: {
			width: 200,
			height: 200
		}
	},
	contentContainer: {
		width: '80%'
	}
}));

const SpaceObjectShow: React.FC<RouteComponentProps<IRouteComponentMatchParamProps>> = ({ match }) => {
	const classes = useStyles();
	const theme = useTheme();
	const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
	const isScreenXSmall = useMediaQuery(theme.breakpoints.down('xs'));

	const [spaceObject, setSpaceObject] = useState<IItem>({
		id: '',
		name: '',
		description: '',
		possession: ''
	});

	useEffect(() => {
		Api.Items.details(match.params.id).then((response) => {
			setSpaceObject(response);
		});
	}, [match.params.id]);

	return (
		<div className={classes.spaceShowContainer}>
			<Grid container justify='center'>
				<Grid item>
					<img
						className={`${classes.image} wow rollIn rotatingAnimation`}
						src={logo}
						alt='Logo'
						data-wow-duration='2s'
						data-wow-delay='1.5s'
					/>
				</Grid>
				<Grid item className={classes.contentContainer}>
					<Grid container direction='column'>
						<Grid item>
							<Typography variant={isScreenMedium ? 'h5' : isScreenSmall ? 'h6' : 'h1'}>{spaceObject.name}</Typography>
						</Grid>
						<Grid item>
							<Typography variant={isScreenMedium ? 'h6' : isScreenSmall || isScreenXSmall ? 'h6' : 'h4'} gutterBottom>
								{spaceObject.description}
							</Typography>
						</Grid>
						<Grid item>
							<Typography>Owned By: {spaceObject.possession}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default SpaceObjectShow;
