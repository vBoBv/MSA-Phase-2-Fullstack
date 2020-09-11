import React, { useState, ChangeEvent, FormEvent } from 'react';
import { IItem } from '../../common/Interfaces';
import { v4 as uuid } from 'uuid';

interface ISpaceObjectForm {
	spaceObject: IItem;
	createSpaceObject: (spaceObject: IItem) => void;
}

const SpaceObjectForm: React.FC<ISpaceObjectForm> = ({ spaceObject: initialSpaceObjectState, createSpaceObject }) => {
	const initializeFormState = () => {
		if (initialSpaceObjectState) {
			return initialSpaceObjectState;
		} else {
			return {
				id: '',
				name: '',
				description: '',
				possession: ''
			};
		}
	};

	const [spaceObject, setSpaceObject] = useState<IItem>(initializeFormState);

	const onInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSpaceObject({ ...spaceObject, [event.currentTarget.name]: event.currentTarget.value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		// e.preventDefault();
		if (spaceObject.id.length === 0) {
			let newSpaceObject = {
				...spaceObject,
				id: uuid()
			};
			createSpaceObject(newSpaceObject);
		}
	};

	return (
		<div style={{ paddingTop: '10rem' }}>
			<form className='ui form' onSubmit={(e) => onSubmit(e)}>
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

export default SpaceObjectForm;
