function TodoForm(props) {
	return (
		<form onSubmit={props.addTodo}>
			<label htmlFor="todo">Add Todo:</label>
			<input id="todo" name="todo" type="text" />
			<input type="submit" value="Submit" />
		</form>
	);
}
function TodoList(props) {
	return (
		<ul>
			{props.todos.map(function (todo, i) {
				return <TodoItem todo={todo} completeTodo={props.completeTodo} key={i} />;
			})}
		</ul>
	);
}
function TodoItem(props) {
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
}
