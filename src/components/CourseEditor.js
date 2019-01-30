import React, {Component} from 'react'
import CourseService from "../services/CourseService"
import ModuleList from "./ModuleList"
import LessonTabs from "./LessonTabs"
import TopicPills from "./TopicPills"

import Widgets from "./Widgets"

class CourseEditor extends Component{
	constructor(props){
		super(props);
		this.courseService = new CourseService()
		this.courseId = parseInt(props.match.params.id)
		this.course = this.courseService.findCourseById(this.courseId)
		this.state={
			course : this.course,
			module : this.course.modules[0],
			selectedLesson : this.course.modules[0].lessons[0]
		}
	}

	selectModule = module => {
		this.setState({
	      module: module
	    });
	}
	 
	selectLesson = lesson => {
		this.setState({
			selectedLesson:lesson, 
		})

	}

	lessonChange = (event) => {
		console.log(event.target.value)
		this.setState({
			changeLesson : {title: event.target.value}
		})
	}

	addLesson = () => {
		console.log(this.state.lessons)
		this.setState({
			lessons : [
				...this.state.lessons,
				this.state.changeLesson
			]
		})
		console.log(this.state.lessons)
	}

	deleteLesson = (lessonDelete) => {
		this.setState({
			lessons: this.state.lessons.filter(
				lesson => lesson !== lessonDelete
			)
		})
	} 

	
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-md-3">
						<div className="sidenav">
							<ModuleList
								course={this.state.course}
					            selectModule={this.selectModule}
					            modules={this.course.modules}
					            updateModule={this.updateModule}
					            selectedModule = {this.state.module}
					        />
					       
					    </div>
					</div>
					<div className="col-md-7">
						<h4>{this.state.course.title}</h4>
						<LessonTabs
							lessons = {this.state.module.lessons}
							selectLesson = {this.selectLesson}
							title={this.state.module.title}
							selectedLesson = {this.state.selectedLesson}
						/>
						<h1> Selected Lesson : {this.state.selectedLesson.title} </h1>
						<TopicPills topics={this.state.selectedLesson.topics}/>
						<br></br>
						<br></br>
						<Widgets/>
					</div>
				</div>	
			</div>
		)
	}

}

export default CourseEditor;