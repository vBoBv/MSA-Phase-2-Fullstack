import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Grid,
	Card,
	CardActions,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Button,
	useMediaQuery
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { IItem } from '../../common/Interfaces';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import backgroundImage from '../../assets/spaceObjects.jpg';
import logo from '../../assets/logo.png';
import Api from '../api/Api';

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		maxWidth: 250,
		backgroundColor: 'transparent',
		color: 'white',
		padding: theme.spacing(4)
	},
	cardItem: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
		color: 'inherit',
		textAlign: 'center'
	},
	cardButtonGroup: {
		backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
		color: 'inherit',
		display: 'flex',
		justifyContent: 'space-between'
	},
	cardButton: {
		color: 'white',
		backgroundImage: 'linear-gradient(to right bottom, rgba(35, 37, 38, 0.8), rgba(65, 67, 69, 1))'
	},
	spaceObjectsContainer: {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top',
		position: 'relative',
		paddingTop: '10rem',
		height: '100%',
		color: 'white'
	},
	title: {
		marginBottom: '3rem'
	},
	addNew: {
		marginBottom: '3rem'
	},
	link: {
		textDecoration: 'none',
		color: 'inherit'
	},
	name: {
		paddingRight: '0.5rem'
	}
}));

const SpaceObjectList = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [spaceObjects, setSpaceObjects] = useState<IItem[]>([]);
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

	useEffect(() => {
		Api.Items.list().then((response) => {
			setSpaceObjects(response);
		});
	}, []);

	const onDeleteSpaceObject = (id: string) => {
		Api.Items.delete(id).then(() => {
			setSpaceObjects([...spaceObjects.filter((object) => object.id !== id)]);
		});
	};

	const renderSpaceObjectList = spaceObjects.map((spaceObject) => {
		return (
			<Grid item key={spaceObject.id}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt={spaceObject.name}
							// height='140'
							image={logo}
							title={spaceObject.name}
						/>
						<CardContent className={classes.cardItem}>
							<Typography variant='h5' component='h2' className={classes.name}>
								{spaceObject.name}
							</Typography>
							<Link to={`/spaceobjects/${spaceObject.id}`} className={classes.link}>
								<ArrowForwardIcon />
							</Link>
						</CardContent>
					</CardActionArea>
					<CardActions className={classes.cardButtonGroup}>
						<Link to={`/spaceobjects/edit/${spaceObject.id}`}>
							<Button size='small' color='primary' className={classes.cardButton}>
								Edit
							</Button>
						</Link>
						<Button
							size='small'
							color='primary'
							className={classes.cardButton}
							onClick={() => onDeleteSpaceObject(spaceObject.id)}>
							Delete
						</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	});

	return (
		<div className={classes.spaceObjectsContainer}>
			<Grid container justify='center' alignItems='center' direction='column'>
				<Grid item className={classes.title}>
					<Typography variant={isScreenSmall ? 'h6' : 'h4'}>Identified / Unidentified Flying Objects</Typography>
				</Grid>
				<Grid item className={classes.addNew}>
					<Link to='/spaceobjects/new'>
						<Button variant='contained' color='primary' size='small' startIcon={<AddIcon />}>
							Add New Object
						</Button>
					</Link>
				</Grid>
			</Grid>
			<Grid container justify='center'>
				{renderSpaceObjectList}
			</Grid>
		</div>
	);
};

export default SpaceObjectList;
