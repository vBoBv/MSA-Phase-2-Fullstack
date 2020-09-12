import React, { useState, useEffect } from 'react';
import SpaceObjectForm from './SpaceObjectForm';
import { IItem } from '../../common/Interfaces';
import Api from '../api/Api';
import { Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

interface IRouteComponentMatchParamProps {
	id: string;
}

const SpaceObjectEdit: React.FC<RouteComponentProps<IRouteComponentMatchParamProps>> = ({ match }) => {
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
		<div>
			<Typography variant='h1'>Edit Space Object</Typography>
			<SpaceObjectForm spaceObject={spaceObject} updateSpaceObject={updateSpaceObject} />
		</div>
	);
};

export default SpaceObjectEdit;
