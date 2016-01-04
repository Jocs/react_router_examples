import React from 'react'
import { render } from 'react-dom'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import { App, IndexApp, Users, UsersIndex, User, About } from './components.js'

render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={IndexApp}/>
			<Route path='users' component={Users}>
				<IndexRoute component={UsersIndex}/>
				<Route path=':id' component={User}/>
			</Route>
			<Route path='/about' component={About}/>
		</Route>
	</Router>,
	document.querySelector('#container')
)