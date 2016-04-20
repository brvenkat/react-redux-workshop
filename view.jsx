var Greeting = function Greeting(props) {
	var myStyle = { color: "red" };
	return (
		<h1 className='helloMessage'>
			<span style={myStyle}> Hi, My name is {props.name}!</span>
		</h1>
	);
};

var Form = function Form(props) {
	return (
		<form onSubmit={props.setNewName}>
			<label>Who do you want to say hi to</label>
			<input type="text" name="myText" />
		</form>
	);
};

var HelloWorld = React.createClass({
	getInitialState: function getInitialState() {
		return ({'name': "Venkat"});
	},
	setNewName: function setNewName(event){
		event.preventDefault();
		this.setState({'name': event.currentTarget.elements.myText.value});
	},
	render: function HelloWorld() {
		return (
			<div className="myReact">
				<Greeting name={this.state.name} />
				<Form setNewName={this.setNewName}/>
			</div>
		);
	}
});
ReactDOM.render(
    <HelloWorld />,
	document.getElementById('root')
);
