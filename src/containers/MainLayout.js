import React from 'react';

import Header from '../components/Header';

const MainLayout = ({children}) => (
	<div>
		<Header />
		<div>
			{children}
		</div>
	</div>
);

export default MainLayout;