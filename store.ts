import * as Redux from 'redux';

const initialState = [{id: 0, completed: false, text: 'Learn React and Redux'}];

function myReducer(state, action) {
	if (typeof state === 'undefined') {
		return initialState
	}
	switch (action.type) {
		case 'ADD_TODO':
			var newtodos = state.slice(),
				newObj:any = {};
			newObj.text = action.value.text;
			newObj.completed = action.value.completed;
			newObj.id = state.length;
			newtodos.push(newObj);
			return newtodos;
		case 'COMPLETE_TODO':
			return generateNewEntry(state, action, true);
		case 'UNCOMPLETE_TODO':
			return generateNewEntry(state, action, false);
		default:
			return state;
	}
}

function generateNewEntry(state, action, completed) {
	var firstPartEnd=state.length > 1?action.id:0,
		lastPartStart=(action.id === state.length -1)?state.length: action.id + 1,
		shallowCopy = state.slice(0,firstPartEnd),
		lastPartArray = state.slice(lastPartStart, state.length),
		toBeModified = state[action.id],
		newObj: any={},
		newArray;
	if (completed) {
		newObj.id = toBeModified.id;
		newObj.text = toBeModified.text;
		newObj.completed = true;
	} else {
		newObj.id = toBeModified.id;
		newObj.text = toBeModified.text;
		newObj.completed = false;
	}
	shallowCopy.push(newObj);
	newArray = shallowCopy.concat(lastPartArray);
	return newArray;
}

var reduxStore = Redux.createStore(myReducer);

reduxStore.subscribe(function logStore() {
		console.log(reduxStore.getState());
	}
);

export default reduxStore;