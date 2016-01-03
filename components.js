import React, { Component } from 'react'
import {Link, IndexLink} from 'react-router'

const ACTIVE = { color: 'red' }

class App extends Component {
	render () {
		return(
			<div>
				<ul>
					<li><IndexLink to='/users' activeStyle={ACTIVE}>Users</IndexLink></li>
					<li><Link to='/about' activeStyle={ACTIVE}>About</Link></li>
				</ul>
				{ this.props.children }
			</div>
		)
	}
}

class IndexApp extends Component {
	render () {
		return (
			<h2>This is indexApp page!</h2>
		)
	}
}

class Users extends Component {
	render () {
		return(
			<div>
				<ul>
					<li><Link to='/users/yan' activeStyle={ACTIVE}>yan</Link></li>
					<li><Link to='/users/ransixi' query={{foo: 'bar'}} activeStyle={ACTIVE}>ransixi</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}

class UsersIndex extends Component {
	render () {
		return(
			<div>This is index page of users!</div>
		)
	}
}

class User extends Component {
	render () {
		return(
			<div>hello {this.props.params.id}</div>
		)
	}
}

class About extends Component {
	render () {
		return(
			<div>This is About Page!</div>
		)
	}
}

export {App, IndexApp, UsersIndex, About, User, Users}



