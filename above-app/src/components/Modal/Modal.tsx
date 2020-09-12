import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { IItem } from '../../common/Interfaces';
import { Button } from '@material-ui/core';

interface ModalProps {
	title: string;
	name: string;
	deleteSpaceObject?: (spaceObject: IItem) => void;
}

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3)
		}
	})
);

const SimpleModal: React.FC<ModalProps> = ({ title, name, deleteSpaceObject }) => {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<h2 id='simple-modal-title'>{title}</h2>
			<div>{name}</div>
			{/* <p id='simple-modal-description'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p> */}
			<Button onClick={() => deleteSpaceObject}>Delete</Button>
			<SimpleModal title={title} name={name} deleteSpaceObject={deleteSpaceObject} />
		</div>
	);

	return (
		<div>
			<button type='button' onClick={handleOpen}>
				Open Modal
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				{body}
			</Modal>
		</div>
	);
};

export default SimpleModal;
