import React, { useState, useEffect } from 'react';
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
import LoginForm from './User/LoginForm';

import SpaceObjectShow from './SpaceObjects/SpaceObjectShow';
import Auction from './Auction/Auction';
import history from './history';
import { IUser } from '../common/Interfaces';

import './App.css';
import Api from './api/Api';
import SignUpForm from './User/SignUpForm';

const App = () => {
	const [user, setUser] = useState<IUser | null>(null);

	const getUser = async () => {
		const currentUser = await Api.User.current();
		setUser(currentUser);
	};

	useEffect(() => {
		if (window.localStorage.getItem('jwt') !== 'null') {
			getUser();
		}
	}, []);

	return (
		<div>
			<CssBaseline />
			<Router history={history}>
				<Header user={user} setUser={setUser} />
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
					<Route exact path='/login' render={(props) => <LoginForm {...props} setUser={setUser} />} />
					<Route exact path='/signup' render={(props) => <SignUpForm {...props} setUser={setUser} />} />
					<Route exact path='/auction' component={Auction} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
