import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SwitchCard from './ControllCard';
import { Copyright } from '../../Components/Copyright/Copyright';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { changeToDashboardTab } from '../../Redux/Actions/changeToDashboardTab';
import { changeToHistoryTab } from '../../Redux/Actions/changeToHistoryTab';
import { changeToLogbookTab } from '../../Redux/Actions/changeToLogbookTab';
import { changeToMapTab } from '../../Redux/Actions/changeToMapTab';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/AccountBoxRounded';
import LogbookIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
import { ListItemAvatar } from '@material-ui/core';
import History from '../../Components/History/History'
import Logbook from '../../Components/Logbook/Logbook'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#1b5e20',
			main: '#4c8c4a',
			dark: '#003300',
			contrastText: '#ffffff'
		}
	}
});

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9)
		}
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 100
	}
}));

function Dashboard(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const TABS = {
		Dashboard: (
			<React.Fragment>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4} lg={3}>
							<Paper className={fixedHeightPaper}>
								<SwitchCard
									labelText="Lights"
									entityID="switch.decorative_lights"
									state={
										props.stateReducer['switch.decorative_lights'] === undefined
											? false
											: props.stateReducer['switch.decorative_lights'].state ===
											  'on'
											? true
											: false
									}
								/>
							</Paper>
						</Grid>
						<Grid item xs={12} md={4} lg={3}>
							<Paper className={fixedHeightPaper}>
								<SwitchCard
									labelText="AC"
									entityID="switch.ac"
									state={
										props.stateReducer['switch.ac'] === undefined
											? false
											: props.stateReducer['switch.ac'].state === 'on'
											? true
											: false
									}
								/>
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</React.Fragment>
		),
		Map: (
			<div>
        <div className={classes.appBarSpacer} />
				<iframe
					title="map"
					width="100%"
					height="880"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
					src="https://www.openstreetmap.org/export/embed.html?bbox=4.776992797851563%2C52.32474373314211%2C5.003585815429688%2C52.42137140544184&amp;layer=mapnik&amp;marker=52.37308399454029%2C4.890289306640625"
				></iframe>
			</div>
		),
		History: <React.Fragment><History /></React.Fragment>,
		Logbook: <React.Fragment><Logbook /></React.Fragment>
	};

	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar
					position="absolute"
					className={clsx(classes.appBar, open && classes.appBarShift)}
				>
					<Toolbar className={classes.toolbar}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							className={clsx(
								classes.menuButton,
								open && classes.menuButtonHidden
							)}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							className={classes.title}
						>
							Dashboard
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
					}}
					open={open}
				>
					<div className={classes.toolbarIcon}>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							align="center"
							className={classes.title}
						>
							Smart Home
						</Typography>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List>
						<ListItem button onClick={props.changeToDashboardTab}>
							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText primary="Overview" />
						</ListItem>
						<ListItem button onClick={props.changeToMapTab}>
							<ListItemIcon>
								<MapIcon />
							</ListItemIcon>
							<ListItemText primary="Map" />
						</ListItem>
						<ListItem button onClick={props.changeToLogbookTab}>
							<ListItemIcon>
								<LogbookIcon />
							</ListItemIcon>
							<ListItemText primary="Logbook" />
						</ListItem>
						<ListItem button onClick={props.changeToHistoryTab}>
							<ListItemIcon>
								<BarChartIcon />
							</ListItemIcon>
							<ListItemText primary="History" />
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem button>
							<ListItemAvatar>
								<AssignmentIcon />
							</ListItemAvatar>
							<ListItemText primary="My Account" />
						</ListItem>
					</List>
				</Drawer>
				<main className={classes.content}>
            {TABS[props.tabReducer.currentPage]}
					<Copyright />
				</main>
			</ThemeProvider>
		</div>
	);
}
const mapSateToProps = state => {
	return state;
};

export default connect(mapSateToProps, {
	changeToDashboardTab,
	changeToHistoryTab,
	changeToLogbookTab,
	changeToMapTab
})(Dashboard);

/* export const mainListItems =  connect(null, )(MainListItems); */
