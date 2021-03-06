import React, {Component} from 'react'
import CourseService from "../services/CourseService"
import ModuleList from "./ModuleList"
import LessonTabs from "./LessonTabs"
import TopicPills from "./TopicPills"

import WidgetListContainer from "../containers/WidgetListContainer";
import widgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ModuleService from "../services/ModuleService";
import LessonService from "../services/LessonService"
import TopicService from "../services/TopicService";

const store = createStore(widgetReducer)

class CourseEditor extends Component{
	constructor(props){
		super(props);
		this.courseService = new CourseService();
		this.moduleService = new ModuleService();
		this.lessonService = new LessonService();
		this.topicService = new TopicService();
		this.courseId = parseInt(props.match.params.id);

		this.state={
			course : '',
            modules : [],
			module: '',
			lesson:'',
			topic:'',

		}


	}

	componentDidMount() {
		this.selectCourse(this.props.match.params.id);
	}

	componentWillReceiveProps(newProps) {
		this.selectCourse(newProps.match.params.id);
	}

	findAllCourses = () => {

		this.courseService.findAllCourses()
			.then(courses =>
				this.setState({
					courses: courses
				}));
	};

	selectCourse = (courseId) => {
		this.courseService.findCourseById(courseId)
			.then(course =>{

				this.setState({
					course: course,
					module:this.state.module!==''? this.state.module:course.modules[0],
					lesson:this.state.lesson!==''?this.state.lesson:course.modules[0].lessons[0],
					topic:this.state.topic!==''?this.state.topic:course.modules[0].lessons[0].topics[0]
				})});
	};

	selectModule = module => {
		this.moduleService.findModuleById(module.id)
			.then(module =>
				this.setState({
					module:module,
					lesson:module.lessons[0],
					topic:module.lessons[0].topics[0]
				}))

	};

	createModule = (module) => {
		this.moduleService.createModule(this.state.course.id, module)
			.then(module => {
				var course = this.state.course;
				course.modules.push(module);
				this.selectCourse(course.id)
			});
	};

	deleteModule = (module) => {
		console.log(module.title);
		this.moduleService.deleteModule(module);
		this.selectCourse(this.state.course.id);

	};

	updateModule = (module) => {
		this.moduleService.updateModule(module)
			.then(module => {
				this.selectModule(module);
				this.selectCourse(this.state.course.id);

			});

	};

	createLesson = (moduleId, lesson) => {
		this.lessonService.createLesson(moduleId, lesson)
			.then(lesson => {
				this.selectModule(this.state.module);
				this.selectCourse(this.state.course.id)
			})
	};

	deleteLesson = (lessonDelete) => {
		console.log("deleted lesson"+lessonDelete.title);
		this.lessonService.deleteLesson(lessonDelete);
		this.selectModule(this.state.module);
	};

	updateLesson = (lesson) => {
		this.lessonService.updateLesson(lesson)
			.then(lesson => {
				this.selectModule(this.state.module);
				this.selectCourse(this.state.course.id)
			});
	};

	selectLesson = lesson => {
		if (lesson!==''){
			this.lessonService.findLessonById(lesson.id)
				.then(lesson =>
					this.setState({
						lesson:lesson,
					}));
		}

	};


	createTopic = (lessonId, topic) => {
		console.log(topic.title);
		this.topicService.createTopic(lessonId, topic)
			.then(topic=>{
				this.selectLesson(this.state.lesson);
				this.selectModule(this.state.module);
				this.selectCourse(this.state.course.id)
			})
	};

	deleteTopic = (deleteTopic) => {
		console.log(deleteTopic.title)
		this.topicService.deleteTopic(deleteTopic);
		this.selectModule(this.state.module);
		this.selectLesson(this.state.lesson);
	};


	updateTopic = (topic) => {
		this.topicService.updateTopic(topic)
			.then(topic => {
				this.selectTopic(topic);
				this.selectLesson(this.state.lesson);
				this.selectModule(this.state.module);
				this.selectCourse(this.state.course.id)
			})
	};

	selectTopic = (topic) => {
		this.setState({
			topic : topic,

		})
	};


	widgets = () => {
		const allWidgets = this.courseService.findWidgets(this.state.selectedTopic.id);

		console.log(allWidgets.length);
	};
	
	render(){
		return(
			<div>
				<h1>Here</h1>
				<LessonTabs
					course = {this.state.course}
					module={this.state.module}
					createLesson={this.createLesson}
					deleteLesson={this.deleteLesson}
					selectLesson={this.selectLesson}
					selectedLesson={this.state.lesson}
					updateLesson={this.updateLesson}
				/>
            	<div className="container">
            	<div className="row">
            		<div className="col-lg-2 col-sm-1">
	            	<div className="sidenav">
	            			<br></br>
						<ModuleList
							course = {this.state.course}
							createModule ={this.createModule}
							deleteModule = {this.deleteModule}
							selectModule = {this.selectModule}
							selectedModule = {this.state.module}
							updateModule = {this.updateModule}
						/>
	                </div>
	                </div>
	                <div className="col-lg-10 col-sm-12">
	                <br></br>

					<TopicPills
						lesson = {this.state.lesson}
						createTopic = {this.createTopic}
						deleteTopic = {this.deleteTopic}
						selectTopic = {this.selectTopic}
						selectedTopic ={this.state.topic}
						updateTopic = {this.updateTopic}/>
	                <Provider store={store}>
						<WidgetListContainer
                        topic={this.state.topic}/>
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