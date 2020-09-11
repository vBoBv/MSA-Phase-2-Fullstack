import React, { useEffect, useState, Fragment } from 'react';
import {
	Grid,
	Card,
	CardActions,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Button,
	IconButton
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/logo.png';

import Api from '../api/Api';
import { IItem } from '../../common/Interfaces';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		maxWidth: 200,
		backgroundColor: 'transparent',
		color: 'white'
	},
	cardItem: {
		backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
		color: 'inherit'
	},
	cardButton: {
		color: 'white'
	},
	objectsContainer: {
		position: 'absolute',
		top: '50%',
		right: '50%',
		transform: `translate(${50}%,${-50}%)`,
		color: 'white',
		zIndex: 1,
		maxWidth: '80%',
		maxHeight: '80%',
		overflow: 'auto',
		marginTop: theme.spacing(5)
	},
	UFOTitle: {},
	moreButton: {
		color: 'inherit'
	}
}));

const AcquiredObjects = () => {
	const classes = useStyles();
	const [objects, setObjects] = useState<IItem[]>([]);

	useEffect(() => {
		Api.Items.list().then((response) => {
			setObjects(response);
		});
	}, []);

	const renderobjects = objects.map((object) => {
		return (
			<Grid item key={object.id}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt={object.name}
							// height='140'
							image={logo}
							title={object.name}
						/>
						<CardContent className={classes.cardItem}>
							<Typography gutterBottom variant='h5' component='h2'>
								{object.name}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className={classes.cardItem}>
						<Button size='small' color='primary' className={classes.cardButton}>
							Share
						</Button>
						<Button size='small' color='primary' className={classes.cardButton}>
							Learn More
						</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	});

	return (
		<Fragment>
			<Grid container className={classes.objectsContainer} justify='center' spacing={10}>
				<Grid container justify='center' className={classes.UFOTitle}>
					<Typography variant='h4'>Acquired Objects</Typography>
				</Grid>
				{renderobjects}
				<Grid container justify='center' className={classes.moreButton}>
					<IconButton>
						<MoreHorizIcon fontSize='large' className={classes.cardButton} />
					</IconButton>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default AcquiredObjects;
