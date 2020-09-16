import React from 'react';
import SpaceObjectForm from './SpaceObjectForm';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { IItem } from '../../common/Interfaces';
import Api from '../api/Api';
import { Typography, useMediaQuery } from '@material-ui/core';
import backgroundImage from '../../assets/spaceObjects.jpg';

const useStyles = makeStyles((theme) => ({
	spaceCreateContainer: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		position: 'relative',
		paddingTop: '10rem',
		height: '100vh',
		color: 'white'
	}
}));

const SpaceObjectCreate = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

	const spaceObject = {
		id: '',
		name: '',
		description: '',
		possession: ''
	};

	const createSpaceObject = (spaceObject: IItem) => {
		Api.Items.create(spaceObject);
	};

	return (
		<div className={classes.spaceCreateContainer}>
			<Typography variant={isScreenSmall ? 'h6' : 'h3'} align='center'>
				Create a new Space Object
			</Typography>
			<SpaceObjectForm createSpaceObject={createSpaceObject} spaceObject={spaceObject} />
		</div>
	);
};

export default SpaceObjectCreate;
