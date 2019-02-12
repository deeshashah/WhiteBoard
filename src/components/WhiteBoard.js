import React, {Component} from 'react'
import CourseTable from './CourseTable.js'
import CourseGrid from './CourseGrid.js'
import CourseEditor from './CourseEditor.js'
import NavBar from './NavBar.js'
import CourseService from '../services/CourseService'


import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class WhiteBoard extends Component{
	constructor(props){
		super(props);

		this.courseService = new CourseService();
		this.state = {
			newCourse : '',
			courses : [],
			selectCourse:"",
			showNavBar : true
		}
	}

	componentDidMount() {
		console.log("here");
		this.courseService.findAllCourses()
			.then(courses =>
				this.setState({courses:courses}));
	}

	addCourse = (title) => {
		this.setState({
			courses: this.courseService.createCourse({
				id:(new Date()).getTime(),
				title:title,
			})
		})
	}

	deleteCourse = course => {
		this.setState({
			courses: this.courseService.deleteCourse(course)
		})
	}

	hideNavBar = () => {
		this.setState({
			showNavBar : false
		})
	}

	selectCourse = course => {
		this.hideNavBar();
		this.setState({selectedCourse: course})
	}

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
							<NavBar addCourse = {this.addCourse}/>
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
						<Route path="/course/edit/:id"
		                   exact
		                   component={CourseEditor}/>
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

				
			</div>

		)
	}


}

export default WhiteBoard;