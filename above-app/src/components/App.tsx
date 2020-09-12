import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import AcquiredObjects from './AcquiredObjects/AcquiredObjects';
import SpaceObjectList from './SpaceObjects/SpaceObjectList';
import SpaceObjectCreate from './SpaceObjects/SpaceObjectCreate';
import SpaceObjectEdit from './SpaceObjects/SpaceObjectEdit';
// import SpaceObjectDelete from './SpaceObjects/SpaceObjectDelete';
import SimpleModal from './SpaceObjects/SpaceObjectDelete';

import SpaceObjectShow from './SpaceObjects/SpaceObjectShow';
import history from './history';

import './App.css';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<Router history={history}>
				<Header />
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/acquiredobjects' component={AcquiredObjects} />
					{/*  */}
					{/* yes<Route exact path='/spaceobjects' component={SpaceObjects} /> */}
					{/* <Route exact path='/spaceobjects/create' component={SpaceObjectCreate} /> */}
					{/* yes<Route exact path={['/spaceobjects/create', '/spaceobjects/edit/:id']} component={SpaceObjectCreate} /> */}

					{/* yes<Route exact path='/spaceobjects/:id' component={SpaceObject} /> */}
					{/*  */}
					<Route exact path='/spaceobjects' component={SpaceObjectList} />
					<Route exact path='/spaceobjects/new' component={SpaceObjectCreate} />
					<Route exact path='/spaceobjects/edit/:id' component={SpaceObjectEdit} />
					<Route exact path='/spaceobjects/delete/:id' component={SimpleModal} />
					<Route exact path='/spaceobjects/:id' component={SpaceObjectShow} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
