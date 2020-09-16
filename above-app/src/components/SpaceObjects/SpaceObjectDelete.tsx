// import React, { useState, useEffect } from 'react';
// import SpaceObjectForm from './SpaceObjectForm';
// import { IItem } from '../../common/Interfaces';
// import Api from '../api/Api';
// import { Typography } from '@material-ui/core';
// import { RouteComponentProps } from 'react-router-dom';
// import Modal from '../Modal/Modal';

// interface IRouteComponentMatchParamProps {
// 	id: string;
// }

// const SpaceObjectDelete: React.FC<RouteComponentProps<IRouteComponentMatchParamProps>> = ({ match }) => {
// 	const [spaceObject, setSpaceObject] = useState<IItem>({
// 		id: '',
// 		name: '',
// 		description: '',
// 		possession: ''
// 	});

// 	useEffect(() => {
// 		Api.Items.details(match.params.id).then((response) => {
// 			setSpaceObject(response);
// 		});
// 	}, [match.params.id]);

// 	const onDeleteSpaceObject = (id: string) => {
// 		Api.Items.delete(spaceObject.id);
// 	};

// 	return <Modal title='Delete Space Object' name={spaceObject.name} />;
// };

// export default SpaceObjectDelete;
