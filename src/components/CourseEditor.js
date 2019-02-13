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
import ModuleService from "../services/ModuleService";
import LessonService from "../services/LessonService"

const store = createStore(widgetReducer)

class CourseEditor extends Component{
	constructor(props){
		super(props);
		this.courseService = new CourseService();
		this.moduleService = new ModuleService();
		this.lessonService = new LessonService();
		this.courseId = parseInt(props.match.params.id);

		//this.course = this.courseService.findCourseById(this.courseId);

		this.state={
			course : '',
            modules : [],
			module: '',
			lesson:'',
			// module : this.course.modules[0],
			// selectedLesson : this.course.modules[0].lessons[0],
			// changeLesson : {title:'', topics:[]},
			// selectedTopic : this.course.modules[0].lessons[0].topics[0],
			// changeTopic: {title: ''},
			// widgets: this.course.modules[0].lessons[0].topics[0].widgets,

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
					lesson:this.state.lesson!==''? this.state.lesson:course.modules[0].lessons[0]
				})});
	};

	selectModule = module => {
		this.moduleService.findModuleById(module.id)
			.then(module =>
				this.setState({
					module:module,
					lesson:this.state.lesson!==''? this.state.lesson:module.lessons[0]
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
		console.log(lessonDelete.title);
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
		this.lessonService.findLessonById(lesson.id)
			.then(lesson =>
				this.setState({
					lesson:lesson,
				}));
	};

	selectTopic = (topic) => {
		this.setState({
			selectedTopic : topic,
			widgets:topic.widgets
		})
	}  

	// lessonChange = (event) => {
	// 	this.setState({
	// 		changeLesson : {title: event.target.value}
	// 	})
	// }

	topicChange = (event) => {
		this.setState({
			changeTopic: {title: event.target.value}
		})
	}






	editLesson = (lesson) => {
		this.setState({
			changeLesson : {title: lesson.title}
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
					course = {this.state.course}
					module={this.state.module}
					createLesson={this.createLesson}
					deleteLesson={this.deleteLesson}
					selectLesson={this.selectLesson}
					selectedLesson={this.state.lesson}
					updateLesson={this.updateLesson}
				/>
				{/*<LessonTabs*/}
	                {/*lessons = {this.state.module.lessons}*/}
	                {/*selectLesson = {this.selectLesson}*/}
	                {/*module={this.state.module}*/}
	                {/*selectedLesson = {this.state.selectedLesson}*/}
	                {/*course={this.state.course}*/}
	                {/*addLesson={this.addLesson}*/}
	                {/*lessonChange={this.lessonChange}*/}
	                {/*changeLesson={this.state.changeLesson}*/}
	                {/*deleteLesson={this.deleteLesson}*/}
	                {/*editLesson={this.editLesson}*/}
	                {/*updateLesson={this.updateLesson}*/}
            	{/*/>*/}
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

	                {/*<TopicPills */}
	                	{/*topics={this.state.selectedLesson.topics}*/}
	                	{/*addTopic={this.addTopic}*/}
	                	{/*selectTopic={this.selectTopic}*/}
	                	{/*selectedTopic={this.state.selectedTopic}*/}
	                	{/*changeTopic={this.state.changeTopic}*/}
	                	{/*topicChange={this.topicChange}*/}
	                	{/*deleteTopic={this.deleteTopic}*/}
	                	{/*editTopic={this.editTopic}*/}
	                	{/*updateTopic={this.updateTopic}*/}
	                {/*/>*/}
	                {/*<Provider store={store}>*/}
						{/*<WidgetListContainer widgets={this.state.widgets}*/}
                        {/*topic={this.state.selectedTopic}/>*/}
					{/*</Provider>*/}
	                <br></br>

	                </div>
	            </div>
	            </div>
			</div>
		)
	}

}

export default CourseEditor;