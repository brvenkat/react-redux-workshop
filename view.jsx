var Form = function form(data) {
		return (
			<form onSubmit={data.submitMethod}>
				<label htmlFor="name">Who do you want to say hi to?</label>
				<input id="name" type="text" defaultValue={data.state.name} />
				<input type="submit" />
			</form>
		);
	},
	App = React.createClass({
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
					<Form state={this.state} submitMethod={this.setNewName} />
					<h1>Hello, {this.state.name}!</h1>
				</div>
			);
		}
	});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
