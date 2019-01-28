import React from 'react'

import {BrowserRouter as Router, Link, Route,} from 'react-router-dom'
const CourseCard = ({course, deleteCourse, selectCourse}) => 
	<div className="card"
		styles={{width:'18rem'}}>
		<img className="card-img-top"
			src="https://picsum.photos/300/200"/>
		<div className="card-body">
		  <h5 className="card-title">{course.title}</h5>
	      <p className="card-text">Card text.</p>
	      <a onClick={() => deleteCourse(course)}
	         className="btn btn-danger">Delete</a>
	      <Link className="btn btn-primary" onClick={() => selectCourse(course)}
	      to={'/course/edit/${course.id}'}>
	      More..
	      </Link>

		</div>
	</div>

export default CourseCard;