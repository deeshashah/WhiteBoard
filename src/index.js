import React from 'react';
import ReactDOM from 'react-dom';
import WhiteBoard from './components/WhiteBoard'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import WidgetListContainer from './containers/WidgetListContainer'
import widgetReducer from './reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


const store = createStore(widgetReducer)


ReactDOM.render(
		<Provider store={store}>
			<WidgetListContainer/>
		</Provider>,
		document.getElementById("root")

	);
