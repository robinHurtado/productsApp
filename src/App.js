import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router';
import { Tabs, Tab, TabsContainer  } from 'react-md';

import './App.css';
import Home from './components/Home';
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