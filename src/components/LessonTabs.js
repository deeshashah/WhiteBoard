import React, {Component} from 'react'
import LessonService from "../services/LessonService";

class LessonTabs extends Component{
	constructor(props){
		super(props);
		this.lessonService= new LessonService();
		this.state = {
			course:'',
			module:'',
			lessons:[],
			lesson: {title: ''},
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.module !== this.props.module){
			//this.findAllModules(nextProps.course.id);
			this.findAllLessons(nextProps.module.id);
			this.setState({
				course: nextProps.course,
				module: nextProps.module})
		}
	}

	findAllLessons = (moduleId) => {
		console.log(moduleId);
		this.lessonService.findAllLessons(moduleId)
			.then(lessons => {
				console.log(lessons);
				this.setState({
				lessons:lessons
			})})
	};

	titleChanged = (event) => {
		console.log(event.target.value);
		const id = this.state.lesson.id;
		this.setState(
			{
				lesson: {id: id,title: event.target.value}
			});
	};

	editLesson = lesson => {
		this.props.selectLesson(lesson);
		const id = lesson.id;
		this.setState(
			{
				lesson: {id: id, title: lesson.title}
			});
	};
	
	render(){
		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			    </button>
			    <a className="navbar-brand" href="#">
			        <span className="menu-collapsed">{this.state.course.title} - {this.state.module.title}</span>
			    </a>
		      <div className="collapse navbar-collapse" id="navbarNavDropdown">
		        <ul className="navbar-nav">
		        	{

		        		this.state.lessons.map((lesson, key) =>
		        			<li onClick = {() => this.props.selectLesson(lesson)} className={lesson.id==this.props.selectedLesson.id? "nav-item active" : "nav-item"} key={key}>
					            <a className="nav-link">{lesson.title}
					            	<a onClick={() => this.props.deleteLesson(lesson)}>
					            		<i className="plus fa fa-times"></i>
					            	</a>
					            	<a onClick={() => this.editLesson(lesson)}>
					            		<i className="plus fa fa-pencil"></i>
					            	</a>
								</a>

					        </li>
		        		)
		        	}

		          	<li className="nav-item">
		          		<input onChange={this.titleChanged} value={this.state.lesson.title} placeholder="Add a new lesson"/>
		          		<a onClick={() => this.props.createLesson(this.state.module.id, this.state.lesson)}><i className="plus fa fa-plus"></i></a>
		          		<a onClick={() => this.props.updateLesson(this.state.lesson)}><i className="plus fa fa-check"></i></a>
		          	</li>
		        </ul>
		      </div>
		    </nav>
		)
	}
}

export default LessonTabs