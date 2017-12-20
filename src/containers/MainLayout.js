import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'; // doc: https://react-dnd.github.io/react-dnd/docs-drag-drop-context.html

import Header from '../components/Header';

const MainLayout = ({children}) => (
	<div className="app">
		<Header />
		<div className="contentContainer">
			{children}
		</div>
	</div>
);

export default DragDropContext(HTML5Backend)(MainLayout);