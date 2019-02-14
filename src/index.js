import React from 'react';
import ReactDOM from 'react-dom';
import WhiteBoard from './components/WhiteBoard'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import CourseManager from './components/CourseManager'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import widgetReducer from './reducers/WidgetReducer'
import {createStore} from 'redux'
import  './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import Route from 'react-router-dom/Route'
import CourseEditor from "./components/CourseEditor";

const store = createStore(widgetReducer)


ReactDOM.render(
		<Router>
			<div>
				<Route path="/" exact component={CourseManager}></Route>
				<Route path="/whiteboard" exact component={WhiteBoard}></Route>
				<Route path="/login" exact component={Login}></Route>
				<Route path="/register" exact component={Register}></Route>
				<Route path="/profile" exact component={Profile}></Route>
				<Route path="/course/edit/:id" exact component={CourseEditor}></Route>
			</div>
		</Router>,
		document.getElementById("root")

	);
