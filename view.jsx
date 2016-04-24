var ConnectedApp;

var mapStateToProps = function mapStateToProps (state) {
	return {'stringList': state};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		'appendToList': function appendToList(event){
			event.preventDefault();
			dispatch({type: 'ADD_TODO', value: {text: event.currentTarget.elements.myText.value, completed: false}});
			event.currentTarget.elements.myText.value='';
		},
		'completeToDo': function completeToDo(event) {
			if (event.currentTarget.checked) {
				dispatch({type: 'COMPLETE_TODO',
					id: Number(event.currentTarget.id)
				});
			} else {
				dispatch({type: 'UNCOMPLETE_TODO',
					id: Number(event.currentTarget.id)
				});
			}
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

var DisplayList = function DisplayList(props) {
	return (
		<ul>
			{props.stringList.map(function(listValue){
				if (listValue.completed)
				{
					return <li className="completed">
						<label htmlFor={listValue.id}>
							<input type = "checkbox" name="myCheckBox" checked={listValue.completed} id={listValue.id} onChange={props.completeToDo} />
							{listValue.text}
						</label>
					</li>;
				} else {
					return <li>
						<label htmlFor={listValue.id}>
							<input type = "checkbox" name="myCheckBox" checked={listValue.completed} id={listValue.id} onChange={props.completeToDo} />
							{listValue.text}
						</label>
					</li>;
				}
			})}
		</ul>
	);
};

var rootComponent = function rootComponent(props){
		return (
			<div className="myReact">
				<Form  appendToList={props.appendToList}/>
				<DisplayList stringList = {props.stringList} completeToDo = {props.completeToDo}/>
			</div>
		);
};

ConnectedApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(rootComponent);

ReactDOM.render(
	<ReactRedux.Provider store={reduxStore}>
		<ConnectedApp />
	</ReactRedux.Provider>,
	document.getElementById('root')
	);