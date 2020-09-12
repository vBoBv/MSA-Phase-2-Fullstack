import React, { useState } from 'react';
import SpaceObjectForm from './SpaceObjectForm';
import { IItem } from '../../common/Interfaces';
import Api from '../api/Api';
import { Typography } from '@material-ui/core';

const SpaceObjectCreate = () => {
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
		<div>
			<Typography variant='h1'>Create a new Space Object</Typography>
			<SpaceObjectForm createSpaceObject={createSpaceObject} spaceObject={spaceObject} />
		</div>
	);
};

export default SpaceObjectCreate;
