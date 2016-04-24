var AddToDoApp;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		'appendToList': function appendToList(event){
			event.preventDefault();
			dispatch({type: 'ADD_TODO', value: {text: event.currentTarget.elements.myText.value, completed: false}});
			event.currentTarget.elements.myText.value='';
		}
	}

};

var Form = function Form(props) {
	return (
		<form onSubmit={props.appendToList}>
			<label>Enter a String</label>
			<input type="text" name="myText" />
		</form>
	);
};

var AddToDoComponent = function ToDoListComponent(props){
	return (
		<div className="myAddToDo">
			<Form  appendToList={props.appendToList}/>
		</div>
	);
};

AddToDoApp = ReactRedux.connect(null, mapDispatchToProps)(AddToDoComponent);