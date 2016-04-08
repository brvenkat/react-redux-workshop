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
	App = function app(props) {
		// console.log(props);
		return (
			<div>
				<TodoForm addTodo={props.addTodo} />
				<TodoList todos={props.todos}
					completeTodo={props.completeTodo} />
			</div>
		);
	},
	ConnectedApp;

function mapStateToProps(state) {
	console.log(state);
	return {
		todos: state
	}
}
function mapDispatchToProps(dispatch) {
	return {
		addTodo: function addTodo(event) {
			event.preventDefault();

			dispatch({ type: 'ADD_TODO', title: event.currentTarget.todo.value });

			event.currentTarget.todo.value = '';
		},
		completeTodo: function completeTodo(event) {
			dispatch({ type: 'COMPLETE_TODO', id: event.target.id, completed: event.target.checked });
		}
	}
}

ConnectedApp = ReactRedux.connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

ReactDOM.render(
	<ReactRedux.Provider store={reduxStore}>
		<ConnectedApp />
	</ReactRedux.Provider>,
	document.getElementById('root')
);
