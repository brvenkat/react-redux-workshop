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
		return ({'stringList': ['Learn React and Redux']});
	},
	appendToList: function appendToList(event){
		event.preventDefault();
		var oldArray = this.state.stringList;
		oldArray.push(event.currentTarget.elements.myText.value);
		this.setState({'stringList': oldArray});
	},
	render: function showArray() {
		console.log('***************** ', this.state);
		return (
			<div className="myReact">
				<DisplayList list={this.state.stringList} />
				<Form appendToList={this.appendToList}/>
			</div>
		);
	}
});
ReactDOM.render(
    <DisplayStrings />,
	document.getElementById('root')
);
