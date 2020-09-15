import React, { useEffect, useState, FormEvent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Accordion, Grid, AccordionDetails, AccordionSummary, Typography, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import backgroundImage from '../../assets/spaceObjects.jpg';

import Api from '../api/Api';
import { IBid, IItem } from '../../common/Interfaces';
import { Agent } from 'https';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			paddingTop: '10rem',
			backgroundImage: `url(${backgroundImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'top',
			position: 'relative',

			height: '100%',
			color: 'white',
			paddingBottom: '10rem'
		},
		accordionContaienr: {
			width: '80vw'
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			flexBasis: '33.33%',
			flexShrink: 0
		},
		secondaryHeading: {
			fontSize: theme.typography.pxToRem(15),
			color: theme.palette.text.secondary
		}
	})
);

const Auction = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState<string | false>(false);
	const [spaceObjects, setSpaceObjects] = useState<IItem[]>([
		{
			id: '',
			name: '',
			description: '',
			possession: '',
			bids: [
				{
					name: '',
					username: '',
					image: '',
					price: 200
				}
			]
		}
	]);

	useEffect(() => {
		Api.Items.list().then((response) => {
			setSpaceObjects(response);
		});
	}, []);

	// const placeBid = (id: string, bid: IBid | null) => {
	// 	spaceObjects.forEach((spaceObject) => {
	// 		if (spaceObject.id === id && bid) {
	// 			bid.price += 200;
	// 		}
	// 	});
	// };

	const placeBid = (id: string) => {
		Api.Items.placebid(id).then((response) => {
			// console.log(response);
		});
	};

	const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	const renderAuctionItems = spaceObjects.map((spaceObject, i) => {
		if (spaceObject.bids) {
			return (
				<Accordion
					key={spaceObject.id}
					className={classes.accordionContaienr}
					expanded={expanded === `panel${i}`}
					onChange={handleChange(`panel${i}`)}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
						<Grid container justify='space-between'>
							<Grid item>
								<Typography className={classes.heading}>{spaceObject.name}</Typography>
							</Grid>
							<Grid item>
								<Typography className={classes.secondaryHeading}>Time</Typography>
							</Grid>
						</Grid>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{spaceObject.description}</Typography>
					</AccordionDetails>
					<Grid container direction='column' justify='center' alignContent='center'>
						<Grid item>
							{spaceObject.bids.map((bid) => {
								return <div key={bid.name}>{bid.price}</div>;
							})}
						</Grid>
						<Button onClick={() => placeBid(spaceObject.id)}>Place Bid</Button>
					</Grid>
				</Accordion>
			);
		}
	});

	return (
		<Grid container className={classes.root} justify='center'>
			{renderAuctionItems}
		</Grid>
	);
};

export default Auction;