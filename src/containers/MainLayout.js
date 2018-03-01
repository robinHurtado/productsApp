import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import '../App.css';
import Home from '../components/Home';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import ProductsPage from './ProductsPage';

const Layout = ({children,history}) => (
  <div>
     <header className="taps">
      <div>
        <center>
          <span className="header__tap" onClick={()=>{history.push("/")}}>Home</span>
          <span className="header__tap" onClick={()=>{history.push("/products")}}>Products</span>
          <span className="header__tap" onClick={()=>{history.push("/clients")}}>Clients</span>
          <span className="header__tap" onClick={()=>{history.push("/contact")}}>Contact</span>
        </center>
      </div>
    </header>
    <section>
      {children}
    </section>
  </div>
);

const MainLayout = (props) => (
	<Layout {...props}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/clients" component={Clients} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
	</Layout>
);

export default withRouter(MainLayout);