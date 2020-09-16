import React, { useState, useEffect } from 'react';
import SpaceObjectForm from './SpaceObjectForm';
import { IItem } from '../../common/Interfaces';
import Api from '../api/Api';
import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import backgroundImage from '../../assets/spaceObjects.jpg';

interface IRouteComponentMatchParamProps {
	id: string;
}

const useStyles = makeStyles((theme) => ({
	spaceEditContainer: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		position: 'relative',
		paddingTop: '10rem',
		height: '100vh',
		color: 'white'
	}
}));

const SpaceObjectEdit: React.FC<RouteComponentProps<IRouteComponentMatchParamProps>> = ({ match }) => {
	const classes = useStyles();
	const theme = useTheme();
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

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

	const updateSpaceObject = (spaceObject: IItem) => {
		Api.Items.update(spaceObject);
	};

	return (
		<div className={classes.spaceEditContainer}>
			<Typography variant={isScreenSmall ? 'h6' : 'h3'} align='center'>
				Edit Space Object
			</Typography>
			<SpaceObjectForm spaceObject={spaceObject} updateSpaceObject={updateSpaceObject} />
		</div>
	);
};

export default SpaceObjectEdit;
