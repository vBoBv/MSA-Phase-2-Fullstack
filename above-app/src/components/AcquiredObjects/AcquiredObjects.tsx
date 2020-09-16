import React, { useEffect, useState, Fragment } from 'react';
import {
	Grid,
	Card,
	CardActions,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	IconButton,
	useMediaQuery
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/logo.png';

import Api from '../api/Api';
import { IItem } from '../../common/Interfaces';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Particle from '../Particles/Particles';
import { Trans } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	cardContainer: {
		maxWidth: 200,
		backgroundColor: 'transparent',
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 180
		}
	},
	cardItem: {
		backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))',
		color: 'inherit',
		display: 'flex',
		justifyContent: 'center'
	},
	cardButton: {
		color: 'white'
	},
	objectsContainer: {
		position: 'absolute',
		top: '50%',
		right: '50%',
		transform: `translate(${50}%,${-50}%)`,
		color: 'white',
		zIndex: 1,
		maxWidth: '80%',
		maxHeight: '80%',
		overflow: 'auto',
		marginTop: theme.spacing(5),
		[theme.breakpoints.down('md')]: {
			top: '55%'
		},
		[theme.breakpoints.down('sm')]: {
			top: '50%'
		}
	},
	acquiredTitle: {
		position: 'absolute',
		top: '20%',
		color: 'white',
		zIndex: 1,
		[theme.breakpoints.down('md')]: {
			paddingTop: '1rem',
			top: '10%'
		},
		[theme.breakpoints.down('sm')]: {
			top: '12%'
		},
		[theme.breakpoints.down('sm')]: {
			top: '20%'
		}
	},
	moreButton: {
		color: 'inherit'
	}
}));

const AcquiredObjects = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isScreenMedium = useMediaQuery(theme.breakpoints.down('md'));
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));
	const isScreenXSmall = useMediaQuery(theme.breakpoints.down('xs'));
	const [objects, setObjects] = useState<IItem[]>([]);

	useEffect(() => {
		Api.Items.list().then((response) => {
			setObjects(response);
		});
	}, []);

	const renderobjects = objects.map((object) => {
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
							<Typography gutterBottom variant='h5' component='h2' align='center'>
								{object.name}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className={classes.cardItem}>
						<Typography>Owned By: {object.possession}</Typography>
					</CardActions>
				</Card>
			</Grid>
		);
	});

	return (
		<Fragment>
			<Grid container justify='center' className={classes.acquiredTitle}>
				<Typography variant={isScreenMedium ? 'h5' : isScreenSmall || isScreenXSmall ? 'h6' : 'h4'}>
					<Trans>Acquired Objects</Trans>
				</Typography>
			</Grid>
			<Grid
				container
				className={classes.objectsContainer}
				justify='center'
				alignItems='center'
				spacing={isScreenSmall ? 5 : 10}
				direction={isScreenSmall ? 'column' : 'row'}>
				{renderobjects}
				<Grid item container justify='center' className={classes.moreButton}>
					<IconButton>
						<MoreHorizIcon fontSize='large' className={classes.cardButton} />
					</IconButton>
				</Grid>
			</Grid>
			<Particle />
		</Fragment>
	);
};

export default AcquiredObjects;
