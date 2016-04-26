import * as ReactRedux from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reduxStore from './store';
import AddToDoApp from './AddToDo';
import ToDoListApp from './ToDoList';

function rootComponent(){
		return (
			<div className="myReact">
				<AddToDoApp />
				<ToDoListApp />
			</div>
		);
};

var ConnectedApp = ReactRedux.connect(null, null)(rootComponent);

ReactDOM.render(
	<ReactRedux.Provider store={reduxStore}>
		<ConnectedApp />
	</ReactRedux.Provider>,
	document.getElementById('root')
	);