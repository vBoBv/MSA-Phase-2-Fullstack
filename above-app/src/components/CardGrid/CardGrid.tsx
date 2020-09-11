import React from 'react';
import { Grid, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { IItem } from '../../common/Interfaces';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import logo from '../../assets/logo.png';

interface ICardGridProps {
	spaceObjects: IItem[];
	onDeleteSpaceObject: (id: string) => void;
	// onSelectSpaceObject: (id: string) => void;
}

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		maxWidth: 250,
		backgroundColor: 'transparent',
		color: 'white',
		padding: theme.spacing(4)
	},
	cardItem: {
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
	}
}));

const CardGrid: React.FC<ICardGridProps> = ({ spaceObjects, onDeleteSpaceObject }) => {
	const classes = useStyles();

	const renderCards = spaceObjects.map((object) => {
		return (
			<Grid item key={object.id}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt={object.name}
							// height='140'
							image={logo}
							title={object.name}
						/>
						<CardContent className={classes.cardItem}>
							<Typography gutterBottom variant='h5' component='h2'>
								{object.name}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className={classes.cardButtonGroup}>
						<Button size='small' color='primary' className={classes.cardButton}>
							Edit
						</Button>
						<Button
							size='small'
							color='primary'
							className={classes.cardButton}
							onClick={() => onDeleteSpaceObject(object.id)}>
							Delete
						</Button>
					</CardActions>
				</Card>
			</Grid>
		);
	});

	return (
		<div>
			<Grid container justify='center'>
				{renderCards}
			</Grid>
		</div>
	);
};

export default CardGrid;
