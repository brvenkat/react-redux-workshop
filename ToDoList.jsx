var ToDoListApp;

var mapStateToProps = function mapStateToProps (state) {
	return {'stringList': state};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
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

var ToDoListComponent = function ToDoListComponent(props){
	return (
		<div className="myToDo">
			<DisplayList stringList = {props.stringList} completeToDo = {props.completeToDo}/>
		</div>
	);
};

ToDoListApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent);