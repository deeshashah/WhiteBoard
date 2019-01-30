import React from 'react'
import NavBar from './NavBar.js'
import CourseTableRow from './CourseTableRow.js'
import CourseService from '../services/CourseService'
import '../App.css'


const CourseTable = ({courses, addCourse, deleteCourse}) => 
	<div>
		<NavBar addCourse = {addCourse}/>
		<table className="table">
		  	<thead>
		  		<tr>
			        <th className="course-title">Title</th>
			        <th className="ownedby">Owned by</th>
			        <th className="lastmodified">Last modified</th>
			        <th></th>
		        </tr>
		    </thead>
		    <tbody>
		    {
				courses.map(course => 
						<CourseTableRow 
							key={course.id} 
							course = {course}
							deleteCourse = {deleteCourse}
						/>

					)
			}
		  </tbody>
		</table>
	</div>

export default CourseTable;