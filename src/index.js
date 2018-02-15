import 'bootstrap-4.0.0/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import MainLayout from './containers/MainLayout';
import Home from './components/Home';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={Store}>
		<MainLayout>
			<Router history={history}>
				<Switch>
					<Route component={Home} exact path='/' />
				</Switch>
			</Router>
		</MainLayout>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
