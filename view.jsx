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
				todos: store.getState()
			};
		},
		addTodo: function changeName(event) {
			var newTodo = event.currentTarget.todo.value;

			event.preventDefault();

			store.dispatch({ type: 'ADD_TODO', title: newTodo });

			this.setState({
				todos: store.getState()
			});

			event.currentTarget.todo.value = '';
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
