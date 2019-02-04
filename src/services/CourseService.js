import courses from './courses.json'

// const topics = [

//               {
//               	"id" : 1
//                 "title": "DOM",
//                 "widgets": [
//                   {
//                     "type": "HEADING",
//                     "size": 1,
//                     "text": "The Document Object Model"
//                   },
//                   {
//                     "type": "PARAGRAPH",
//                     "text": "This topic introduces the DOM"
//                   },
//                   {
//                     "type": "LIST",
//                     "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
//                   },
//                   {
//                     "type": "IMAGE",
//                     "src": "https://picsum.photos/200"
//                   },
//                   {
//                     "type": "LINK",
//                     "title": "The DOM",
//                     "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
//                   }
//                 ]
//                }
//             ]

class CourseService{
	constructor(){
		this.courses = courses;
		//this.topics = topics;
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

	// createWidget = (topicId, widget) => {
	// 	for(var i=0; i<this.topics.length;i++){
	// 		if(this.topics[i].id == topicId){
	// 			widgets = this.topics[i].widgets.push(widget);
	// 		}
	// 	}
	// }
}

export default CourseService