import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import MainLayout from './containers/MainLayout';
import Login from './containers/Login';
import SignupForm from './containers/SignupForm';
import Home from './containers/Home';
import ForgotPsw from './containers/ForgotPsw';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={Store}>
		<MainLayout>
			<Router history={history}>
				<Switch>
					<Route component={Login} exact path='/' />
					<Route component={SignupForm} exact path='/create-account' />
					<Route component={Home} exact path='/home' />
					<Route component={ForgotPsw} exact path='/forgot-password' />
				</Switch>
			</Router>
		</MainLayout>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
