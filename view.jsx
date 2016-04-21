var DisplayList = function DisplayList(props) {
	return (
		<ul>
          {props.list.map(function(listValue){
			  console.log(JSON.stringify(listValue));
			  return <li>
				  <label htmlFor={listValue.id}>
			  		<input type = "checkbox" name="myCheckBox" checked={listValue.completed} id={listValue.id} onChange={props.completeToDo} />
					  {listValue.text}
				  </label>
			  	</li>;
		  })}
		</ul>
	);
};

var Form = function Form(props) {
	return (
		<form onSubmit={props.appendToList}>
			<label>Enter a String</label>
			<input type="text" name="myText" />
		</form>
	);
};

var DisplayStrings = React.createClass({
	getInitialState: function getInitialState() {
		return {'stringList': store.getState()};
	},
	appendToList: function appendToList(event){
		event.preventDefault();
		store.dispatch({type: 'ADD_TODO', value: {text: event.currentTarget.elements.myText.value, completed: false}});
		event.currentTarget.elements.myText.value='';
		this.setState({'stringList': store.getState()});
	},
	completeToDo: function completeToDo(event) {
		if (event.currentTarget.checked) {
			store.dispatch({type: 'COMPLETE_TODO',
				id: Number(event.currentTarget.id)
			});
		} else {
			store.dispatch({type: 'UNCOMPLETE_TODO',
				id: Number(event.currentTarget.id)
			});
		}
		this.setState({'stringList': store.getState()});
	},
	render: function showArray() {
		return (
			<div className="myReact">
				<Form appendToList={this.appendToList} />
				<DisplayList list={this.state.stringList} completeToDo={this.completeToDo} />
			</div>
		);
	}
});
ReactDOM.render(
    <DisplayStrings />,
	document.getElementById('root')
);