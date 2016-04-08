function todoReducer(state, action) {
	state = state || [{ id: 0, title: 'Learn React Basics', completed: false }];
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat({ id: state.length, title: action.title, completed: false });
		case 'COMPLETE_TODO':
			function completeTodo() {
				var startArray = state.slice(0, action.id),
					todo = state[action.id],
					endArray = state.slice(parseInt(action.id, 10) + 1, state.length);

				return [].concat(
					startArray,
					{ id: todo.id, title: todo.title, completed: action.completed },
					endArray
				);
			}
			return completeTodo();
		default:
			return state;
	}
}

window.store = Redux.createStore(todoReducer);

store.subscribe(function logStore() {
			console.log(store.getState());
		}
	);
