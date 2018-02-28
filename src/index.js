import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import App from './App';
import MainLayout from './containers/MainLayout';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={Store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
