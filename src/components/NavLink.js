import React from 'react';
import { Link as RouterLink, Route } from 'react-router';
import { FontIcon, ListItem } from 'react-md';

const NavLink = ({ label, to, exact, icon }) => (
  <Route path={to} exact={exact}>
    {({ match }) => {
      let leftIcon;
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>;
      }

      return (
        <ListItem
          active={!!match}
          to={to}
          primaryText={label}
          leftIcon={leftIcon}
        />
      );
    }}
  </Route>
);

export default NavLink;