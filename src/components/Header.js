import React, { PureComponent } from 'react';
import { Tabs, Tab, TabsContainer  } from 'react-md';

export default class Header extends PureComponent {

  render(){
    return(
        <header>
           <TabsContainer panelClassName="md-grid" colored>
            <Tabs
              tabId="tabs"
            >
              <Tab label="Home" onClick={()=>{
                const { history } = this.props;
                history.push("/");
              }}>
              </Tab>
              <Tab label="Products" active={true} onClick={()=>{
                const { history } = this.props;
                history.push("/products");
              }}>

              </Tab>
              <Tab label="Client" />
              <Tab label="Contacts" />
            </Tabs>
          </TabsContainer>
        </header>
    );
  }
}