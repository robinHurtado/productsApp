import React from 'react';
import { Tabs, Tab, TabsContainer  } from 'react-md';
import { Redirect } from 'react-router'

const MainLayout = (props) => (
	<div>
    <header>
       <TabsContainer panelClassName="md-grid" colored>
        <Tabs tabId="tabs">
          <Tab
            label="Home"
          >
            <Redirect push to="/" />
            <h1>Home</h1>
          </Tab>
          <Tab
            label="Products"
            onClick={()=>{
            props.history.push("/products");
            }}
          >

          </Tab>
          <Tab
            label="Client"
            onClick={()=>{
              props.history.push("/client");
            }}
          >
            <h1>Client</h1>
          </Tab>
          <Tab label="Contacts" />
        </Tabs>
      </TabsContainer>
    </header>
	</div>
);

export default MainLayout;