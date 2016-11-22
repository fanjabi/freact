import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Layout from "./components/Layout"
import Foo from "./components/Foo"
import Bar from "./components/Bar"
import store from "./store"

const history = syncHistoryWithStore(browserHistory, store)

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
	<Router history={history}>
		<Route path="/" component={Layout}>
			<Route path="foo" component={Foo}/>
			<Route path="bar" component={Bar}/>
		</Route>
	</Router>
</Provider>, app);
