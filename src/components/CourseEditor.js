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
		this.selectedLesson = ''
		if(this.course.modules.length===0){
			this.module = {lessons:[]}
		}
		else{
			this.module = this.course.modules[0]
			if(this.course.modules[0].lessons.length===0){
				this.selectedLesson = ''
			}
			else{
				this.selectedLesson = this.course.modules[0].lessons[0]
			}
		}

		

		this.topics = []
		if(this.module.length===0){
			this.lessons = []
		}
		else{
			this.lessons = this.module.lessons

			if(this.selectedLesson.topics.length!=0){
				this.topics = this.selectedLesson.topics
				this.selectedTopic = this.topics[0]
			}
		}

		this.state={
			course : this.course,
			module : this.module,
			selectedLesson : this.selectedLesson,
			changeLesson : {title:'', topics:[]},
			selectedTopic : this.selectedTopic,
			changeTopic: {title: ''}
		}


	}

	selectModule = module => {
		const selectedLesson = {title:'', topics:[]}
		if(module.lessons!==undefined){
			console.log("here")
			const selectedLesson = module.lessons[0]
		}

		this.setState({
	      module: module,
	      selectedLesson:selectedLesson
	      
	    });

	}
	 
	selectLesson = lesson => {
		this.setState({
			selectedLesson:lesson, 
		})


	}

	selectTopic = (topic) => {
		this.setState({
			selectedTopic : topic
		})
	}  

	lessonChange = (event) => {
		console.log(event.target.value)
		this.setState({
			changeLesson : {title: event.target.value}
		})
	}

	topicChange = (event) => {
		this.setState({
			changeTopic: {title: event.target.value}
		})
	}

	deleteLesson = (lessonDelete) => {
		const module = this.state.module
		this.module.lessons = module.lessons.filter(
				lesson => lesson !== lessonDelete
			)
	}

	addLesson = () => {
		
		const module = this.state.module
		module.lessons.push(this.state.changeLesson)
		console.log(module)
		this.setState({
			module:module
		})
	}


	editLesson = (lesson) => {
		this.setState({
			changeLesson : {title: lesson.title}
		})
	}

	updateLesson = () => {
		const module = this.state.module
		const addLessons = module.lessons
		for(var i=0;i<addLessons.length;i++){
			if(addLessons[i] === this.state.selectedLesson){
				addLessons[i].title = this.state.changeLesson.title
			}
		}
		module.lessons = addLessons
		this.setState({
			module:module
		})

	}

	addTopic = () => {
		const lesson = this.state.selectedLesson
		lesson.topics.push(this.state.changeTopic)
		this.setState({
			selectedLesson:lesson
		})
	}

	deleteTopic = (topicDelete) => {
		const selectedLesson = this.state.selectedLesson
		this.selectedLesson.topics = selectedLesson.topics.filter(
				topic => topic !== topicDelete
			)
	}

	editTopic = (topic) => {
		this.setState({
			changeTopic : {title: topic.title}
		})
	}

	updateTopic = () => {
		const lesson = this.state.selectedLesson
		const addTopics = lesson.topics
		for(var i=0;i<addTopics.length;i++){
			if(addTopics[i] === this.state.selectedTopic){
				console.log("here")
				addTopics[i].title = this.state.changeTopic.title
			}
		}

		this.setState({
			selectedLesson:lesson
		})
	}
	
	render(){
		return(
			<div>
				<LessonTabs
	                lessons = {this.state.module.lessons}
	                selectLesson = {this.selectLesson}
	                module={this.state.module}
	                selectedLesson = {this.state.selectedLesson}
	                course={this.state.course}
	                addLesson={this.addLesson}
	                lessonChange={this.lessonChange}
	                changeLesson={this.state.changeLesson}
	                deleteLesson={this.deleteLesson}
	                editLesson={this.editLesson}
	                updateLesson={this.updateLesson}
            	/>
            	<div className="container">
            	<div className="row">
            		<div className="col-lg-2 col-sm-1">
	            	<div className="sidenav">
	            			<br></br>
							<ModuleList
							course={this.state.course}
							selectModule={this.selectModule}
							modules={this.course.modules}
							updateModule={this.updateModule}
							selectedModule = {this.state.module}
							/>

	                </div>
	                </div>
	                <div className="col-lg-10 col-sm-12">
	                <br></br>
	                
	                <TopicPills 
	                	topics={this.state.selectedLesson.topics}
	                	addTopic={this.addTopic}
	                	selectTopic={this.selectTopic}
	                	selectedTopic={this.state.selectedTopic}
	                	changeTopic={this.state.changeTopic}
	                	topicChange={this.topicChange}
	                	deleteTopic={this.deleteTopic}
	                	editTopic={this.editTopic}
	                	updateTopic={this.updateTopic}
	                />
	                <br></br>
	                <Widgets/>
	                </div>
	            </div>
	            </div>
			</div>
		)
	}

}

export default CourseEditor;