import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

interface StyledTabsProps {
	value: number;
	onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
	indicator: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		'& > span': {
			maxWidth: 50,
			width: '100%',
			backgroundColor: '#26bdb8'
		}
	}
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
	label: string;
}

const StyledTab = withStyles((theme: Theme) =>
	createStyles({
		root: {
			textTransform: 'none',
			color: '#fff',
			fontWeight: theme.typography.fontWeightRegular,
			fontSize: theme.typography.pxToRem(15),
			marginRight: theme.spacing(1),
			'&:focus': {
				opacity: 1
			}
		}
	})
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1
	},
	padding: {
		paddingBottom: theme.spacing(3)
	},
	tabsContainer: {
		backgroundColor: 'transparent'
	}
}));

const NavigationTabs = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<div className={classes.tabsContainer}>
				<StyledTabs value={value} onChange={handleChange} aria-label='styled tabs example'>
					<StyledTab label='Home' />
					<StyledTab label='I/UFO' />
					<StyledTab label='Auction' />
					<StyledTab label='Join us' />
				</StyledTabs>
				<Typography className={classes.padding} />
			</div>
		</div>
	);
};

export default NavigationTabs;
