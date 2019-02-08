import React, {Component} from 'react'
import CourseService from "../services/CourseService"
import ModuleList from "./ModuleList"
import LessonTabs from "./LessonTabs"
import TopicPills from "./TopicPills"

import Widgets from "./Widgets"
import WidgetListContainer from "../containers/WidgetListContainer";
import widgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(widgetReducer)

class CourseEditor extends Component{
	constructor(props){
		super(props);
		this.courseService = new CourseService()

		this.courseId = parseInt(props.match.params.id)

		this.course = this.courseService.findCourseById(this.courseId)

		this.state={
			course : this.course,
			module : this.course.modules[0],
			selectedLesson : this.course.modules[0].lessons[0],
			changeLesson : {title:'', topics:[]},
			selectedTopic : this.course.modules[0].lessons[0].topics[0],
			changeTopic: {title: ''},
			widgets: this.course.modules[0].lessons[0].topics[0].widgets,

		}


	}

	selectModule = module => {

		this.setState({
	      module: module,
	      selectedLesson:module.lessons[0],
			selectedTopic : module.lessons[0].topics[0],
			widgets:module.lessons[0].topics[0].widgets

		});

	};

	createModule = (module) => {
		const course = this.courseService.createModule(this.state.course.id, module);
		this.setState({
			course : course
		})
	};

	deleteModule = (module, moduleTitle) => {

		const course = this.courseService.deleteModule(this.state.course.id, module);
		this.setState({
			course : course
		})
	};

	updateModule = (module, moduleTitle) => {
		const course = this.courseService.updateModule(this.state.course.id, this.state.module, moduleTitle);
		this.setState({
			course:course
		})
	};




	selectLesson = lesson => {
		this.setState({
			selectedLesson:lesson,
			selectedTopic : lesson.topics[0],
			widgets: lesson.topics[0].widgets

		})



	}

	selectTopic = (topic) => {
		this.setState({
			selectedTopic : topic,
			widgets:topic.widgets
		})
	}  

	lessonChange = (event) => {
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
		console.log(module);
		module.lessons = module.lessons.filter(
				lesson => lesson.id !== lessonDelete.id
		)
		this.setState({
			module : module
		})
	}

	addLesson = () => {
		
		const module = this.state.module
		module.lessons.push(this.state.changeLesson)
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
	};

	deleteTopic = (topicDelete) => {
		const selectedLesson = this.state.selectedLesson
		selectedLesson.topics = selectedLesson.topics.filter(
				topic => topic.id !== topicDelete.id
			)
		this.setState({
			selectedLesson : selectedLesson,
		})
	};

	editTopic = (topic) => {
		this.setState({
			changeTopic : {title: topic.title}
		})
	};

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
	};

	widgets = () => {
		const allWidgets = this.courseService.findWidgets(this.state.selectedTopic.id);

		console.log(allWidgets.length);
	};
	
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
							createModule = {this.createModule}
							deleteModule = {this.deleteModule}
							modules={this.course.modules}
							updateModule={this.updateModule}
							selectedModule = {this.state.module}
							editRow = {this.editRow}
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
	                <Provider store={store}>
						<WidgetListContainer widgets={this.state.widgets}
                        topic={this.state.selectedTopic}/>
					</Provider>
	                <br></br>

	                </div>
	            </div>
	            </div>
			</div>
		)
	}

}

export default CourseEditor;