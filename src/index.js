import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
//import App from './App';
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
			<MainLayout />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
