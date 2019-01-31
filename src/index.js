import React from 'react';
import ReactDOM from 'react-dom';
import WhiteBoard from './components/WhiteBoard'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'


import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

ReactDOM.render(
		<WhiteBoard/>,
		document.getElementById("root")

	);
