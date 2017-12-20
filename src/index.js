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
import BoardContainer from './containers/boards/BoardContainer';
import ShowActiveBoard from './containers/boards/activeBoard/ShowActiveBoard';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
//	<Route component={Header} />
ReactDOM.render(
	<Provider store={Store}>
		<MainLayout>
			<Router history={history}>
				<Switch>
				
					<Route component={Login} exact path='/' />
					<Route component={SignupForm} exact path='/create-account' />
					<Route component={BoardContainer} exact path='/home' />
          <Route component={ShowActiveBoard} path="/b/:id" />
					<Route component={ForgotPsw} exact path='/forgot-password' />
          <Route component={NotFound} />
				</Switch>
			</Router>
		</MainLayout>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
