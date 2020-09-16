import React, { FormEvent, useState, useEffect } from 'react';
import { IItem } from '../../common/Interfaces';
import { v4 as uuid } from 'uuid';
import history from '../history';
import { Grid, Button } from '@material-ui/core';
import { Trans } from 'react-i18next';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

interface ISpaceObjectFormProps {
	spaceObject: IItem;
	createSpaceObject?: (spaceObject: IItem) => void;
	updateSpaceObject?: (spaceObject: IItem) => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		spaceObjectFormContainer: {
			display: 'flex',
			justifyContent: 'center',
			paddingTop: '2rem'
		},
		label: {
			paddingRight: '1rem'
		},
		field: {
			marginBottom: '1rem'
		},
		button: {
			color: 'inherit',
			marginTop: '1rem'
		}
	})
);

const StreamForm: React.FC<ISpaceObjectFormProps> = ({
	spaceObject: initialSpaceObjectState,
	createSpaceObject,
	updateSpaceObject
}) => {
	const classes = useStyles();
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
				// history.push(`/spaceobjects/${newSpaceObject.id}`);
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
		<div className={classes.spaceObjectFormContainer}>
			<form onSubmit={(event) => onSubmit(event)}>
				<Grid container justify='space-between'>
					<Grid item className={classes.label}>
						<label>Name</label>
					</Grid>
					<Grid item>
						<input type='text' name='name' placeholder='Name' onChange={onInputChange} value={spaceObject.name} />
					</Grid>
				</Grid>
				<Grid container justify='space-between'>
					<Grid item className={classes.label}>
						<label>Description</label>
					</Grid>
					<Grid item>
						<textarea
							name='description'
							placeholder='Description'
							value={spaceObject.description}
							onChange={onInputChange}
							rows={4}
						/>
					</Grid>
				</Grid>
				<Grid container justify='space-between'>
					<Grid item className={classes.label}>
						<label>Possession</label>
					</Grid>
					<Grid item>
						<input
							type='text'
							name='possession'
							placeholder='Possession'
							value={spaceObject.possession}
							onChange={onInputChange}
						/>
					</Grid>
				</Grid>
				<Grid container justify='center'>
					<Button type='submit' className={classes.button} variant='outlined' color='primary'>
						<Trans>Submit</Trans>
					</Button>
				</Grid>
			</form>
		</div>
	);
};

export default StreamForm;
