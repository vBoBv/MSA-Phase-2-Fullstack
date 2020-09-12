import React, { useState, useEffect } from 'react';
import { IItem } from '../../common/Interfaces';
import Api from '../api/Api';
import { Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

interface IRouteComponentMatchParamProps {
	id: string;
}

const SpaceObjectShow: React.FC<RouteComponentProps<IRouteComponentMatchParamProps>> = ({ match }) => {
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
		<div>
			<div>{spaceObject.name}</div>
			<div>{spaceObject.description}</div>
			<div>{spaceObject.possession}</div>
		</div>
	);
};

export default SpaceObjectShow;
