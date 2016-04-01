var App = React.createClass({
	getInitialState: function () {
		return { name: 'World' };
	},
	setNewName: function (event) {
		event.preventDefault();
		this.setState({ name: event.target.querySelector('#name').value });
	},
	render: function render() {
		return (
			<div>
				<form onSubmit={this.setNewName}>
					<label for="name">Who do you want to say hi to?</label>
					<input id="name" type="text" defaultValue={this.state.name} />
					<input type="submit" />
				</form>
				<h1>Hello, {this.state.name}!</h1>
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
