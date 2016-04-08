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
					return <Todo todo={todo} completeTodo={props.completeTodo} key={i} />;
				})}
			</ul>
		);
	},
	Todo = function Todo(props) {
		var isCompleted = props.todo.completed ? 'completed' : '';

		return (
			<li key={props.key}>
				<label>
					<input id={props.todo.id} name="completed" type="checkbox"
						onChange={props.completeTodo} />
					<span className={isCompleted}>{props.todo.title}</span>
				</label>
			</li>
		);
	},
	App = React.createClass({
		getInitialState: function getState() {
			return {
				todos: store.getState()
			};
		},
		addTodo: function addTodo(event) {
			var newTodo = event.currentTarget.todo.value;

			event.preventDefault();

			store.dispatch({ type: 'ADD_TODO', title: newTodo });

			this.setState({
				todos: store.getState()
			});

			event.currentTarget.todo.value = '';
		},
		completeTodo: function completeTodo(event) {
			store.dispatch({ type: 'COMPLETE_TODO', id: event.target.id, completed: event.target.checked });
			this.setState({
				todos: store.getState()
			})
		},
		render: function render() {
			return (
				<div>
					<TodoForm addTodo={this.addTodo} />
					<TodoList todos={this.state.todos}
						completeTodo={this.completeTodo} />
				</div>
			);
		}
	});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
