import React, { useState, useEffect } from 'react';
import { IItem } from '../../common/Interfaces';
import Api from '../api/Api';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import backgroundImage from '../../assets/spaceObjects.jpg';
import logo from '../../assets/logo.png';
// import { HubConnectionBuilder, LogLevel, HubConnection } from '@microsoft/signalr';
// import SpaceObjectShowComment from './SpaceObjectShowComment';

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

	// const token = window.localStorage.getItem('jwt');
	// const [hubConnection, setHubConnection] = useState<HubConnection>();

	// const addComment = async (values: any) => {
	// 	values.itemId = spaceObject.id;
	// 	try {
	// 		await hubConnection?.invoke('SendComment', values);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	const createHubConnection = async () => {
	// 		const connection = new HubConnectionBuilder()
	// 			.withUrl('https://localhost:44379/chat', {
	// 				accessTokenFactory: () => token!
	// 			})
	// 			.configureLogging(LogLevel.Information)
	// 			.withAutomaticReconnect()
	// 			.build();
	// 		try {
	// 			connection.on('NewUserConnected', (clientIp: string) => {
	// 				console.log('New user joined the session - IP: ' + clientIp);
	// 			});

	// 			await connection.start();
	// 			console.log('Successfully connected to signalR hub.');
	// 		} catch (error) {
	// 			console.log('Error establishing connection to signalR hub: ' + { error });
	// 		}

	// 		connection.on('ReceiveComment', (comment) => {
	// 			spaceObject.discussions?.push(comment);
	// 		});

	// 		setHubConnection(connection);
	// 	};
	// 	createHubConnection();
	// 	return () => {
	// 		const stopHubConnection = () => {
	// 			hubConnection?.stop();
	// 		};
	// 		stopHubConnection();
	// 	};
	// }, []);

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
			{/* <SpaceObjectShowComment spaceObject={spaceObject} addComment={addComment} /> */}
		</div>
	);
};

export default SpaceObjectShow;
