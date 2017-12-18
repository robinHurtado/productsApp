import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import MainLayout from './containers/MainLayout';
import Login from './containers/Login';
import SignupForm from './containers/SignupForm';
import Home from './containers/Home';
import ForgotPsw from './containers/ForgotPsw';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
	<MainLayout>
		<Router history={history}>
			<Switch>
				<Route component={Login} exact path='/' />
				<Route component={SignupForm} exact path='/create-account' />
				<Route component={Home} exact path='/home' />
				<Route component={ForgotPsw} exact path='/forgot-password' />
			</Switch>
		</Router>
	</MainLayout>, document.getElementById('root'));
registerServiceWorker();
