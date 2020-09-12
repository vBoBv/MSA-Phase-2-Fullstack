import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { IItem } from '../../common/Interfaces';

import backgroundImage from '../../assets/spaceObjects.jpg';
import logo from '../../assets/logo.png';
import Api from '../api/Api';

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		maxWidth: 250,
		backgroundColor: 'transparent',
		color: 'white',
		padding: theme.spacing(4)
	},
	cardItem: {
		backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
		color: 'inherit',
		textAlign: 'center'
	},
	cardButtonGroup: {
		backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
		color: 'inherit',
		display: 'flex',
		justifyContent: 'space-between'
	},
	cardButton: {
		color: 'white',
		backgroundImage: 'linear-gradient(to right bottom, rgba(35, 37, 38, 0.8), rgba(65, 67, 69, 1))'
	},
	spaceObjectsContainer: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		position: 'relative',
		paddingTop: '10rem',
		height: '100%',
		color: 'white'
	},
	title: {
		marginBottom: '3rem'
	},
	addNew: {
		marginBottom: '3rem'
	}
}));

const SpaceObjectList = () => {
	const classes = useStyles();
	const [spaceObjects, setSpaceObjects] = useState<IItem[]>([]);

	useEffect(() => {
		Api.Items.list().then((response) => {
			setSpaceObjects(response);
		});
	}, []);

	const renderSpaceObjectList = spaceObjects.map((spaceObject) => {
		return (
			<Grid item key={spaceObject.id}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt={spaceObject.name}
							// height='140'
							image={logo}
							title={spaceObject.name}
						/>
						<CardContent className={classes.cardItem}>
							<Typography gutterBottom variant='h5' component='h2'>
								{spaceObject.name}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className={classes.cardButtonGroup}>
						<Link to={`/spaceobjects/edit/${spaceObject.id}`}>
							<Button size='small' color='primary' className={classes.cardButton}>
								Edit
							</Button>
						</Link>
						<Link to={`/spaceobjects/delete/${spaceObject.id}`}>
							<Button size='small' color='primary' className={classes.cardButton}>
								Delete
							</Button>
						</Link>
						<Link to={`/spaceobjects/${spaceObject.id}`}>View</Link>
					</CardActions>
				</Card>
			</Grid>
		);
	});

	return (
		<div className={classes.spaceObjectsContainer}>
			<Grid container justify='center' alignItems='center' direction='column'>
				<Grid item className={classes.title}>
					<Typography variant='h4'>Identified / Unidentified Flying Objects</Typography>
				</Grid>
				<Grid item className={classes.addNew}>
					<Link to='/spaceobjects/new'>
						<Button variant='contained' color='primary' size='small' startIcon={<AddIcon />}>
							Add New Object
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid container justify='center'>
				{renderSpaceObjectList}
			</Grid>
		</div>
	);
};

export default SpaceObjectList;
