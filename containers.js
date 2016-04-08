var ConnectedForm,
	ConnectedList;

function mapStateToProps_todoList(state) {
	return {
		todos: state
	}
}
function mapDispatchToProps_todoList(dispatch) {
	return {
		completeTodo: function completeTodo(event) {
			dispatch({ type: 'COMPLETE_TODO', id: event.target.id, completed: event.target.checked });
		}
	}
}
function mapDispatchToProps_todoForm(dispatch) {
	return {
		addTodo: function addTodo(event) {
			event.preventDefault();

			dispatch({ type: 'ADD_TODO', title: event.currentTarget.todo.value });

			event.currentTarget.todo.value = '';
		}
	}
}

ConnectedForm = ReactRedux.connect(
	null,
	mapDispatchToProps_todoForm
)(TodoForm);

ConnectedList = ReactRedux.connect(
	mapStateToProps_todoList,
	mapDispatchToProps_todoList
)(TodoList);
