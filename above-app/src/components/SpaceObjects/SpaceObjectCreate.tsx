import React, { useState, useEffect } from 'react';
import SpaceObjectForm from './SpaceObjectForm';
import { IItem } from '../../common/Interfaces';

import Api from '../api/Api';

const SpaceObjectCreate = () => {
	const [spaceObjects, setSpaceObjects] = useState<IItem[]>([]);
	const [selectedSpaceObject, setSelectedSpaceObject] = useState<IItem | null>(null);

	const onSelectSpaceObject = (id: string) => {
		let selectObject = spaceObjects.filter((object) => object.id === id);
		setSelectedSpaceObject(selectObject[0]);
	};

	const onCreateSpaceObject = (spaceObject: IItem) => {
		Api.Items.create(spaceObject).then(() => {
			setSpaceObjects([...spaceObjects, spaceObject]);
		});
	};

	const onEditSpaceObject = (spaceObject: IItem) => {
		setSpaceObjects([...spaceObjects.filter((object) => object.id !== spaceObject.id), spaceObject]);
	};

	useEffect(() => {
		Api.Items.list().then((response) => {
			setSpaceObjects(response);
		});
	}, []);

	return <SpaceObjectForm createSpaceObject={onCreateSpaceObject} spaceObject={selectedSpaceObject!} />;
};

export default SpaceObjectCreate;
