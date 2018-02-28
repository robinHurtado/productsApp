import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import { Tabs, Tab, TabsContainer  } from 'react-md';

import Home from './components/Home';
import ProductsPage from './components/ProductsPage';

class App extends Component {
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
              <Tab label="Clients" />
              <Tab label="Contacts" />
            </Tabs>
          </TabsContainer>
          <Switch key={location.key}>
            <Route exact path="/" location={location} component={Home} />
            <Route path="/products" location={location} component={ProductsPage} />
          </Switch>
          </div>
        )}
      />
    );
  }
}

export default App;