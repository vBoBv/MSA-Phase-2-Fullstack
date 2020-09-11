import React, { useEffect, useState } from 'react';
import CardGrid from '../CardGrid/CardGrid';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IItem } from '../../common/Interfaces';

import backgroundImage from '../../assets/spaceObjects.jpg';
import Api from '../api/Api';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
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

const SpaceObjects = () => {
	const classes = useStyles();
	const [spaceObjects, setSpaceObjects] = useState<IItem[]>([]);

	useEffect(() => {
		Api.Items.list().then((response) => {
			setSpaceObjects(response);
		});
	}, []);

	return (
		<div className={classes.spaceObjectsContainer}>
			<Grid container justify='center' alignItems='center' direction='column'>
				<Grid item className={classes.title}>
					<Typography variant='h4'>Identified / Unidentified Flying Objects</Typography>
				</Grid>
				<Grid item className={classes.addNew}>
					<Button variant='contained' color='primary' size='small' startIcon={<AddIcon />}>
						Add New Object
					</Button>
				</Grid>
			</Grid>

			<CardGrid spaceObjects={spaceObjects} />
		</div>
	);
};

export default SpaceObjects;
