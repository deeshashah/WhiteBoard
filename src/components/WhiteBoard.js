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
			user: {},
			course : {title: ''},
			courses : [],
			selectCourse:"",
			showNavBar : true,
			redirect:false,
			loggedin:false,
			userexists:false,
		}
	}

	titleChanged = (event) =>
		this.setState({
			course : {title:event.target.value}
		});

	componentDidMount = () => {

		this.findAllCourses();
		this.profile();

	};

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
					console.log("true");
					this.setState({
						user:user,
						userexists:true,
					})
				}else{
					this.userService.logout();
					let path = '/login';
					this.props.history.push(path);
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

				<center><h2>Welcome, {this.state.user.username}</h2></center>
				<center><button className="btn btn-danger" onClick={this.logout}>
					<Link to="\" className="link">Logout</Link>
				</button>
					<button className="btn btn-info">
						<Link to="/profile" className="link profilebutton">Profile</Link>
					</button></center>
				<Router>
					<center><div>

						<button className="btn btn-warning">
							<Link to="/course/table" className="link">View courses (List mode)</Link>
						</button>
						<button className="btn btn-secondary">
							<Link to="/course/grid" className="link">View courses (Grid mode)</Link>
						</button>
						<Route path="/course/table" exact render={() =>
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
					</div></center>
				</Router>




			</div>

		)
	}


}

export default WhiteBoard;