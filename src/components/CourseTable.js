import React from 'react'
import NavBar from './NavBar.js'
import CourseTableRow from './CourseTableRow.js'
import CourseService from '../services/CourseService'
import '../App.css'


const CourseTable = ({courses, addCourse, deleteCourse, hideNavBar}) => 
	<div>
		
		<table className="table">
		  	<thead class="thead-dark">
		  		<tr>
			        <th scope="col">Title</th>
			        <th scope="col">Owned by</th>
			        <th scope="col">Last modified</th>
			        <th scope="col"></th>
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