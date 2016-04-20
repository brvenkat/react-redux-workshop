# react-redux-workshop
A simple project for getting my team up to speed with our new technologies.

## Step Zero: Setup!

To start this workshop, you have two options:

1. Pull this in locally with `git clone git@github.com:cerebralix/react-redux-workshop.git` and then run `git checkout 343d1abac5ae57acb03b7adbeceb8238c7af2a98` to grab the starting point for the project.

	> IMPORTANT: I recommend that you don't edit this project, but create your own and just have this as a reference. I will be force pushing changes to this project, so it will most likely cause issues if you edit this.

2. Or, just keep this open in Github and just navigate the code via the commit history.

 At each step, I will provide you a link to the commit that provides the answer, or you can checkout the commit here for the code.

## Step One: Hello, World!

1. In the core React and ReactDOM libraries (what we linked above), you have a few methods off of the exported object that you have to know:
	- `React.createElement`
	- `ReactDOM.render`
2. Using these two methods, create a simple "Hello, World!" react component.
	```
	React.createElement('h1', null, 'Hello, World!');
	```
3. Now, render this component to the DOM:
	```
	ReactDOM.render(
		YOUR REACT ELEMENT HERE,
		document.getElementById('root')
	);
	```
4. Visit the page in the browser to see if it works!
5. Now, I want you to have the `<h1>` element not contain the string, but contain another React component that contains the string.
6. Also, make the child React component render the a `<span>` with inline CSS that makes the color of the text red.
7. Finally, pull "World" out of the string and add it back as a JS variable by concatenating it with "Hello, " and "!".

That's it! You're now done with Step One. [Here's the commit on Github](https://github.com/cerebralix/react-redux-workshop/commit/343d1abac5ae57acb03b7adbeceb8238c7af2a98).

## Step Two:

The important thing is to know that all the fancy JSX that you see that looks like a cross between HTML and XML is converted (or transpiled) to what you just wrote in Step One. What you write next in JSX is nothing more than a fancy way of writing plain old JavaScript.

1. Add the JSX tranformer to your index page after the two existing scripts:
	```
	<script src="https://fb.me/JSXTransformer-0.13.3.js"></script>
	```
2. Now convert your `view.js` file to `view.jsx`. This tell the JSX transformer to transpile the JSX to JavaScript at runtime.
3. Go back to your `index.html` file and update the script tag to pull the `.jsx` file now and also add the `type="text/jsx"` attribute to the `<script>` tag
4. You're now ready to write JSX!
5. Instead of writing `React.createElement` everywhere, you can now just write a function that returns JSX, and use that. Here's an example:
	```
	var Greeting = function Greeting() {
		return (
			<span>"Hello, my name is Justin."</span>
		);
	};
	```
6. Then you can import that into another component, or the `ReactDOM.render` method like so:
	```
	ReactDOM.render(
		<Greeting />,
		document.getElementById('root')
	);
	```
7. Go ahead and convert your "Hello, World!" app to this style. It's important to note that
8. Giving that should have worked for you. Let's get a little fancier. React allows the use of programmatic classes that provide more power to the tool. Let's start by converting our function to a class like so ...
	```
	var Greeting = React.createClass({
		render: function render() {
			return (
				<span>"Hello, my name is Justin."</span>
			);
		}
	});
	```
9. Nothing will need to change in your `ReactDOM.render` method, so refresh your app in the browser, and all should work!
10. Let's now add two more properties to the class. `getInitialState`, which is an official property of the class. It does exactly what it says and is part of the React lifecycle. The other is a function that captures a form submission. It should look like this:
	```
	var Greeting = React.createClass({
			getInitialState: function getInitialState() {
				// ...
			},
			setNewName: function setNewName(event) {
				// ...
			},
			render: function render() {
				return (
					<span>"Hello, my name is Justin."</span>
				);
			}
		});
		```
11. Now that we have the ability, add your initial name, "World", to the initial state by returning the string inside an object in the function.
12. `setNewName` method will capture a form `onsumbit` event, so it needs to `preventDefault`. Then, run a `this.setState()` with the new name as an argument. You can get this argument off the `event.currentTarget`, which I'll explain shortly. This method will be available off of the `this` object.
13. Finally, add the necessary JSX (basically the HTML) of the form:
	```
	<form onSubmit={this.setNewName}>
		<label for="name">Who do you want to say hi to?</label>
		<input id="name" type="text" defaultValue={this.state.name} />
		<input type="submit" />
	</form>
	```
14. Now, that `onSubmit` fires off the `setNewName` method. Notice how we are setting a default value with `this.state.name`?
15. We can now set the new name with the following bit of code in the `setNewName` method (make sure to not forget the `event.preventDefault()` call as well):
	```
	this.setState({ name: event.target.querySelector('#name').value });
	```
16. Does it work? Keep trying and see if you can get it working. Don't forget to utilize the React documentation for the API. Don't just give up and look at the answer

That's it! You're now done with Step Two. [Here's the commit on Github](https://github.com/cerebralix/react-redux-workshop/commit/ee345c686b1a24a7ad6392e86cc756bd49458c6a).

## Step Three: Start organizing your code!

By now, you probably have a very large class that houses all of your app. Start splitting it up! Have your root class import in another React element so you start composing with components:

1. Create a new functional React component call `Form` and have it return all your form JSX:
	```
	var Form = function form(data) {
			return (
				<form onSubmit={data.submitMethod}>
					<label htmlFor="name">Who do you want to say hi to?</label>
					<input id="name" type="text" defaultValue={data.state.name} />
					<input type="submit" />
				</form>
			);
		};
	```
2. Now import that form in your root app component:
	```
	<div>
		<Form />
		<h1>Hello, {this.state.name}!</h1>
	</div>
	```
3. This isn't going to work. That's because the form component doesn't have access to the needed data and functions. Let's add that now!
4. When importing the `<Form />` component in, pass the state and form submission function like this:
	```
	<Form state={this.state} functionName={this.functionName} />
	```

Once you feel your code is organized and working, [check out how I did it here](https://github.com/cerebralix/react-redux-workshop/commit/25b7e887547cdcd31ac021976e384c7e68724275).

## Step Four: Make your first todo app!

You now know enough to get started making your first todo app. Here are the requirements:

- A form needs to be able to accept a string and, on submit, push that string onto an array that represents the state of the app.
- When the data is pushed to the array, the new state is set with `this.setState()`, that's how the app knows to re-render. The array should look something like this:
	```
	['Learn React and Redux']
	```
- The app maps over the new array creating an unordered list of todos. The trick here is to do something like this:
	```
	<ul>
		{props.todos.map(function (todo, i) {
			return <Todo todo={todo} key={i} />;
		})}
	</ul>
	```

It may be hard, but really try to get this. If you're stuck, [check out how I do it here](https://github.com/cerebralix/react-redux-workshop/commit/af597f3baf9dd4eb6adb508e2286d3f3ff9c9a5b), but don't just plain old copy and paste.

## Step Five: Coming soon ...
