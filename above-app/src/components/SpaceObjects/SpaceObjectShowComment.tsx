import React, { useState, FormEvent } from 'react';
import { IItem, IDiscussion } from '../../common/Interfaces';
import { Button } from '@material-ui/core';

interface ISpaceObjectShowComment {
	spaceObject: IItem;
	addComment: (value: any) => void;
}

const SpaceObjectShowComment: React.FC<ISpaceObjectShowComment> = ({ spaceObject, addComment }) => {
	const [formValue, setFormValue] = useState<IDiscussion>({
		id: '',
		username: '',
		name: 'string;',
		comment: 'string',
		createAt: new Date()
	});

	const onInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormValue({ ...formValue, [event.currentTarget.name]: event.currentTarget.value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		spaceObject.discussions!.push(formValue);
		addComment(spaceObject);
	};

	const renderForm = () => {
		return (
			<div>
				<form onSubmit={(e) => onSubmit(e)}>
					<label>Description</label>

					<textarea name='comment' placeholder='Comment' value={formValue.comment} onChange={onInputChange} rows={4} />
					<Button type='submit' variant='outlined' color='primary'>
						Submit
					</Button>
				</form>
				{spaceObject.discussions
					? spaceObject.discussions.map((discussion) => {
							return <div key={discussion.comment}>{discussion.comment}</div>;
					  })
					: null}
			</div>
		);
	};

	return <div>{renderForm()}</div>;
};

export default SpaceObjectShowComment;
