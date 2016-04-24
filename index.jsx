function rootComponent(){
		return (
			<div className="myReact">
				<AddToDoApp />
				<ToDoListApp />
			</div>
		);
};

console.log(rootComponent);
var ConnectedApp = ReactRedux.connect(null, null)(rootComponent);
console.log(ConnectedApp);

ReactDOM.render(
	<ReactRedux.Provider store={reduxStore}>
		<ConnectedApp />
	</ReactRedux.Provider>,
	document.getElementById('root')
	);