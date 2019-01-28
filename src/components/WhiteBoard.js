import React, {Component} from 'react'
import CourseTable from './CourseTable.js'
import CourseGrid from './CourseGrid.js'
import CourseEditor from './CourseEditor.js'
import CourseService from '../services/CourseService'
import '../App.css'

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class WhiteBoard extends Component{
	constructor(props){
		super(props);

		this.courseService = new CourseService()
		this.state = {
			newCourse : '',
			courses : this.courseService.findAllCourses(),
			selectCourse:""
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

	selectCourse = course =>
		this.setState({selectedCourse: course})

	render(){
		return(
			<div>
				<Router>
					<div>
						<Link to="/course/table">Table</Link> |
						<Link to="/course/grid">Grid</Link>
						<Route path="/course/table" render={() => 
							<CourseTable 
							addCourse = {this.addCourse}
							courses={this.state.courses}
							deleteCourse = {this.deleteCourse}
							selectCourse ={this.selectCourse}
							/>}
						/>
						<Route path="/course/edit/:id"
		                   exact
		                   component={CourseEditor}/>
						<Route path="/course/grid" render={() => 
							<CourseGrid 
							courses={this.state.courses}
							deleteCourse = {this.deleteCourse} 
							addCourse ={this.addCourse}
							selectCourse = {this.selectCourse}
							/>}
						/>
					</div>
				</Router>

				
			</div>

		)
	}


}

export default WhiteBoard;