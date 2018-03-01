import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import '../App.css';
import NavBar from '../components/NavBar.js';
import Home from '../components/Home';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import ProductsPage from './ProductsPage';


const MainLayout = (props) => (
	<NavBar {...props}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/clients" component={Clients} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
	</NavBar>
);

export default withRouter(MainLayout);