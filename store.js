const initialState = ['Learn React and Redux'];

function myReducer(state, action) {
	if (typeof state === 'undefined') {
		return initialState
	}
	switch (action.type) {
		case 'ADD_TODO':
			var newtodos = state;
			newtodos.push(action.value);
			return newtodos;
		default:
			return state;
	}
}

window.store = Redux.createStore(myReducer);
