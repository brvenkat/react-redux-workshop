function todoReducer(state, action) {
	state = state || ['Learn React Basics'];
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat(action.title);
		default:
			return state;
	}
}

window.store = Redux.createStore(todoReducer);
