import React from 'react';
import ReactDOM from 'react-dom';
import WhiteBoard from './components/WhiteBoard'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import widgetReducer from './reducers/WidgetReducer'
import {createStore} from 'redux'



const store = createStore(widgetReducer)


ReactDOM.render(
		<WhiteBoard/>,
		document.getElementById("root")

	);
