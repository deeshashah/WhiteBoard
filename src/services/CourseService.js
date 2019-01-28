import courses from './courses.json'

class CourseService{
	constructor(){
		this.courses = courses;
	}

	createCourse = course => {
		if(course == null){
			course = {
				id : (new Date()).getTime(),
				title: 'New Course'
			}
		}

		this.courses.push(course)
		return this.courses
	}

	findCourseById = courseId => {
		for(var i=0;i<this.courses.length;i++){
			console.log("in here")
			if(this.courses[i].id == courseId){
				return this.courses[i];
			}
		}
	}

	findAllCourses = () => {
		 return this.courses
	}

	deleteCourse = deleteCourse => {
		this.courses = this.courses.filter(
				course => course.id !== deleteCourse.id
			)
		return this.courses
	}

	updateCourse = (id, course) => {
		for(var i=0;i<this.courses.length;i++){
			if(this.courses[i] == id){
				this.courses[i] = course
			}
		}
	}
}

export default CourseService