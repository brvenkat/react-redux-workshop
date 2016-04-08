function App() {
	return (
		<div>
			<ConnectedForm />
			<ConnectedList />
		</div>
	);
}

ReactDOM.render(
	<ReactRedux.Provider store={reduxStore}>
		<App />
	</ReactRedux.Provider>,
	document.getElementById('root')
);
