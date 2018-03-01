import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tabs, Tab, TabsContainer  } from 'react-md';

import './App.css';
import Home from './components/Home';
import Clients from './components/Clients';
import Contact from './components/Contact';
import ProductsPage from './containers/ProductsPage';

class App extends PureComponent {
  render() {
    return (
      <Route
        render={({ location,history }) => (
          <div>
            <TabsContainer panelClassName="md-grid" colored>
              <Tabs tabId="tabs">
                <Tab
                  label="Home"
                  onClick={()=>{
                   history.push("/");
                  }}
                >
                </Tab>
                <Tab
                  label="Products"
                  onClick={()=>{
                   history.push("/products");
                  }}
                />
                <Tab label="Clients"
                  onClick={()=>{
                   history.replace("/clients");
                  }}
                />
                <Tab label="Contact"
                  onClick={()=>{
                   history.push("/contact");
                  }}
                />
              </Tabs>
            </TabsContainer>
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route exact path="/products" location={location} component={ProductsPage} />
              <Route exact path="/clients" location={location} component={Clients} />
              <Route exact path="/contact" location={location} component={Contact} />
            </Switch>
          </div>
        )}
      />
    );
  }
}

export default App;