import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';

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
import { useTranslation } from 'react-i18next';
import './Translation/i18n';
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinShareButton,
	LinkedinIcon,
	RedditShareButton,
	RedditIcon,
	TwitterShareButton,
	TwitterIcon
} from 'react-share';

const App = () => {
	const SOCIAL_MEDIA_ICON_SIZE = 40;
	const URL_TO_SHARE = 'https://www.google.com/';
	const POPUP_TITLE = 'Market for space objects';

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

	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const renderSocialMediaShareButtons = () => {
		return (
			<React.Fragment>
				{/*
				// @ts-ignore */}
				<FacebookShareButton
					url={URL_TO_SHARE}
					quote='Check out a market place to grab some space objects'
					hashtag='#Above'>
					<FacebookIcon size={SOCIAL_MEDIA_ICON_SIZE} />
				</FacebookShareButton>
				{/*
				// @ts-ignore */}
				<LinkedinShareButton url={URL_TO_SHARE} title={POPUP_TITLE}>
					<LinkedinIcon size={SOCIAL_MEDIA_ICON_SIZE} />
				</LinkedinShareButton>
				{/*
				// @ts-ignore */}
				<RedditShareButton url={URL_TO_SHARE} title={POPUP_TITLE}>
					<RedditIcon size={SOCIAL_MEDIA_ICON_SIZE} />
				</RedditShareButton>
				{/*
				// @ts-ignore */}
				<TwitterShareButton url={URL_TO_SHARE} title={POPUP_TITLE}>
					<TwitterIcon size={SOCIAL_MEDIA_ICON_SIZE} />
				</TwitterShareButton>
			</React.Fragment>
		);
	};

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
				<Grid container style={{ backgroundColor: 'white' }}>
					<Button onClick={() => changeLanguage('maori')}>Maori</Button>
					<Button onClick={() => changeLanguage('english')}>English</Button>
					<Grid item style={{ backgroundColor: 'red' }}>
						{renderSocialMediaShareButtons()}
					</Grid>
				</Grid>
			</Router>
		</div>
	);
};

export default App;
