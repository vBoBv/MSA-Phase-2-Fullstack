import React, { FormEvent, useState, useEffect } from 'react';
import { IItem } from '../../common/Interfaces';
import { v4 as uuid } from 'uuid';
import history from '../history';

interface ISpaceObjectFormProps {
	spaceObject: IItem;
	createSpaceObject?: (spaceObject: IItem) => void;
	updateSpaceObject?: (spaceObject: IItem) => void;
}

const StreamForm: React.FC<ISpaceObjectFormProps> = ({
	spaceObject: initialSpaceObjectState,
	createSpaceObject,
	updateSpaceObject
}) => {
	const [spaceObject, setSpaceObject] = useState<IItem>(initialSpaceObjectState);

	useEffect(() => {
		setSpaceObject(initialSpaceObjectState);
	}, [initialSpaceObjectState]);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (spaceObject.id.length === 0) {
			let newSpaceObject = {
				...spaceObject,
				id: uuid()
			};
			if (createSpaceObject) {
				createSpaceObject(newSpaceObject);
			}
		} else {
			if (updateSpaceObject) {
				updateSpaceObject(spaceObject);
			}
		}
		history.push('/spaceobjects');
	};

	const onInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSpaceObject({ ...spaceObject, [event.currentTarget.name]: event.currentTarget.value });
	};

	return (
		<div style={{ paddingTop: '10rem' }}>
			<form className='ui form' onSubmit={(event) => onSubmit(event)}>
				<div className='field'>
					<label>Name</label>
					<input type='text' name='name' placeholder='Name' onChange={onInputChange} value={spaceObject.name} />
				</div>
				<div className='field'>
					<label>Description</label>
					<textarea
						name='description'
						placeholder='Description'
						value={spaceObject.description}
						onChange={onInputChange}
						rows={4}
					/>
				</div>
				<div className='field'>
					<label>Possession</label>
					<input
						type='text'
						name='possession'
						placeholder='Possession'
						value={spaceObject.possession}
						onChange={onInputChange}
					/>
				</div>
				<button className='ui button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default StreamForm;
