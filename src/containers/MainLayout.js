import React from 'react';

const MainLayout = ({children}) => (
	<div className="app">
		<div className="contentContainer">
			{children}
		</div>
	</div>
);

export default MainLayout;