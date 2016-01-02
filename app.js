import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute, Redirect} from 'react-router';

class About extends Component {
	constructor( props ) {
		super(props);
	}
	render () {
		return(
			<h2> This is about page!</h2>
		);
	}
}

class Inbox extends Component {
	constructor( props ) {
		super(props);
	}
	render () {
		return(
			<div>
				<h2> This is Inbox page!</h2>
				{this.props.children || `This is no message`}
			</div>
		);
	}
}

class MessageList extends Component {
	render () {
		return (
			<div>
				<Link to='messages/1'>Go to 1</Link>
				<Link to='inbox/messages/2'> Go to 2</Link>
			</div>
		);
	}
}

class Message extends Component {
	render () {
		return(
			<div>This is Message!{this.props.params.id}</div>
		);
	}
}

class Home extends Component {
	constructor( props ) {
		super(props);
	}
	render () {
		return(
			<h2> This is Home page!</h2>
		);
	}
}

class App extends Component {

	render () {
		return (
			<div>
				<h1>App Route without react-router</h1>
				<ul>
					<li><Link to='about'>About</Link></li>
					<li><Link to='inbox'>Inbox</Link></li>
				</ul>
				{	this.props.children	}
			</div>
		);
	}
}

render(
	(<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='about' component={About}/>
			<Route path='inbox' component={Inbox}>
				<IndexRoute component={MessageList}/>
				<Route path='/messages/:id' component={Message}/>
				<Redirect from='messages/:id' to='/messages/:id'/>
			</Route>
		</Route>
	</Router>),
	document.querySelector('#container')
);



