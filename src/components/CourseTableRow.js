import React, {Component} from 'react'
import CourseEditor from './CourseEditor'
import {BrowserRouter as Router, Link, Route,} from 'react-router-dom'
import '../App.css'


const CourseTableRow = ({course, deleteCourse}) =>
	<tr>
	  <Router>
	  	<div>
		  <td scope="row"><Link to={'/course/edit/${course.id}'}>{course.title}</Link></td>
		</div>
	  </Router>
	  <td>me</td>
	  <td>6:45PM</td>
	  <td><a onClick={() => deleteCourse(course)}><i className="fa fa-close"></i></a></td>
	</tr>


export default CourseTableRow;
