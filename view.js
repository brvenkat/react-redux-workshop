var name = 'World',
	Greeting = React.createElement('span', { style: { color: 'red' }}, 'Hello, ' + name + '!');

ReactDOM.render(
	React.createElement('h1', { className: 'helloMessage' }, Greeting),
	document.getElementById('root')
);
