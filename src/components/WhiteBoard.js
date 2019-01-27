import React, {Component} from 'react'
import NavBar from './NavBar.js'
import CourseTable from './CourseTable.js'
import CourseGrid from './CourseGrid.js'

import CourseService from '../services/CourseService'
import '../App.css'

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class WhiteBoard extends Component{
	constructor(props){
		super(props);

		this.courseService = new CourseService()
		this.state = {
			newCourse : '',
			courses : this.courseService.findAllCourses()
		}
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



	render(){
		return(
			<div>
				<NavBar addCourse = {this.addCourse} courseChange = {this.courseChange}/>

				<Router>
					<div>
						<Link to="/course/table">Table</Link> |
						<Link to="/course/grid">Grid</Link>
						<Route path="/course/table" render={() => <CourseTable courses={this.state.courses}
							deleteCourse = {this.deleteCourse}/>}/>
						
						<Route path="/course/grid" render={() => <CourseGrid courses={this.state.courses}
							deleteCourse = {this.deleteCourse} addCourse ={this.addCourse}/>}/>
					</div>
				</Router>

				
			</div>

		)
	}


}

export default WhiteBoard;