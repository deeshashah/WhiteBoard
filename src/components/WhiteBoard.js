import React, {Component} from 'react'
import CourseTable from './CourseTable.js'
import CourseGrid from './CourseGrid.js'
import CourseEditor from './CourseEditor.js'
import NavBar from './NavBar.js'
import CourseService from '../services/CourseService'


import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import UserService from "../services/UserService";

class WhiteBoard extends Component{
	constructor(props){
		super(props);
		this.userService = new UserService();
		this.courseService = new CourseService();
		this.state = {
			user: {username:''},
			course : {title: ''},
			courses : [],
			selectCourse:"",
			showNavBar : true,
			redirect:false,
			loggedin:false
		}
	}

	titleChanged = (event) =>
		this.setState({
			course : {title:event.target.value}
		});

	componentDidMount = () => {

		this.findAllCourses();
		this.profile();
	}

	findAllCourses = () => {
		this.courseService.findAllCourses()
			.then(courses =>
				this.setState({courses: courses}));
	};

	addCourse = () => {
		this.courseService
			.createCourse(this.state.course)
			.then(() =>
				this.findAllCourses());
	};

	deleteCourse = courseId =>
		this.courseService.deleteCourse(courseId)
			.then(() =>
				this.findAllCourses());

	hideNavBar = () => {
		this.setState({
			showNavBar : false
		})
	};

	selectCourse = course => {
		this.hideNavBar();

		this.setState({selectedCourse: course})
	};

	profile = () => {
		this.userService.profile()
			.then(user => {
				if(user){
					this.setState({
						user:user,
					})
				}

			});
	};

	logout = () => {
		this.userService.logout();
		let path = '/';
		this.props.history.push(path);

	};

	render(){
		return(
			<div>

				<Router>
					<div>
						<center>To view in courses in table mode: <Link to="/course/table">Table</Link>
							<br></br>
							To view courses in grid mode: <Link to="/course/grid">Grid</Link></center>
						<Route path="/course/table" render={() => 
							<div>
							<NavBar addCourse = {this.addCourse} titleChanged = {this.titleChanged}/>
							<CourseTable 
							addCourse = {this.addCourse}
							courses={this.state.courses}
							deleteCourse = {this.deleteCourse}
							selectCourse ={this.selectCourse}
							hideNavBar = {this.hideNavBar}
							/>
							</div>
							}
						/>

						<Route path="/course/grid" render={() => 
							<div>
							<NavBar addCourse = {this.addCourse}/>
							<br></br>
							<CourseGrid 
							courses={this.state.courses}
							deleteCourse = {this.deleteCourse} 
							addCourse ={this.addCourse}
							selectCourse = {this.selectCourse}
							/></div>
						}
							
						/>
					</div>
				</Router>

				<h2>Welcome: {this.state.user.username}</h2>
				<button className="btn btn-danger" onClick={this.logout}>
					<Link to="\" className="link">Logout</Link>
				</button>
				
			</div>

		)
	}


}

export default WhiteBoard;