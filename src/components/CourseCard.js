import React from 'react'

const CourseCard = ({course, deleteCourse}) => 
	<div className="card"
		styles={{width:'18rem'}}>
		<img className="card-img-top"
			src="https://picsum.photos/300/200"/>
		<div className="card-body">
		  <h5 className="card-title">{course.title}</h5>
	      <p className="card-text">Card text.</p>
	      <a onClick={() => deleteCourse(course)}
	         className="btn btn-danger">Delete</a>
		</div>
	</div>

export default CourseCard;