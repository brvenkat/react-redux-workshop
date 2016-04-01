var TodoForm = function Todo(props) {
		return (
			<form onSubmit={props.addTodo}>
				<label htmlFor="todo">Add Todo:</label>
				<input id="todo" name="todo" type="text" />
				<input type="submit" value="Submit" />
			</form>
		);
	},
	TodoList = function TodoList(props) {
		return (
			<ul>
				{props.todos.map(function (todo, i) {
					return <Todo todo={todo} key={i} />;
				})}
			</ul>
		);
	},
	Todo = function Todo(props) {
		var key = props.todo + "-" + props.i;
		return (
			<li key={key}>{props.todo}</li>
		);
	},
	App = React.createClass({
		getInitialState: function getState() {
			return {
				todos: ['Learn React Basics']
			};
		},
		addTodo: function changeName(event) {
			event.preventDefault();
			var newTodo = event.currentTarget.todo.value;
			this.state.todos.push(newTodo);
			event.currentTarget.todo.value = '';

			this.setState({
				todos: this.state.todos
			})
		},
		render: function render() {
			return (
				<div>
					<TodoForm addTodo={this.addTodo} />
					<TodoList todos={this.state.todos} />
				</div>
			);
		}
	});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
