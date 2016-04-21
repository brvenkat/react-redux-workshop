var DisplayList = function DisplayList(props) {
	return (
		<ul>
          {props.list.map(function(listValue){
			  return <li>{listValue}</li>;
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
		store.dispatch({type: 'ADD_TODO', value: event.currentTarget.elements.myText.value});
		event.currentTarget.elements.myText.value='';
		this.setState({'stringList': store.getState()});
	},
	render: function showArray() {
		return (
			<div className="myReact">
				<Form appendToList={this.appendToList}/>
				<DisplayList list={this.state.stringList} />
			</div>
		);
	}
});
ReactDOM.render(
    <DisplayStrings />,
	document.getElementById('root')
);