import React, {Component} from 'react'


class LessonTabs extends Component{
	constructor(props){
		super(props)
	}

	
	render(){
		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
			    </button>
			    <a className="navbar-brand" href="#">
			        <span className="menu-collapsed">{this.props.course.title} - {this.props.module.title}</span>
			    </a>
		      <div className="collapse navbar-collapse" id="navbarNavDropdown">
		        <ul className="navbar-nav">
		        	{

		        		this.props.lessons.map((lesson, key) => 
		        			<li onClick = {() => this.props.selectLesson(lesson)} className={lesson==this.props.selectedLesson? "nav-item active" : "nav-item"} key={key}>
					            <a className="nav-link">{lesson.title}
					            	<a onClick={() => this.props.deleteLesson(lesson)}>
					            		<i className="plus fa fa-times"></i>
					            	</a>
					            	<a onClick={() => this.props.editLesson(lesson)}>
					            		<i className="plus fa fa-pencil"></i>
					            	</a>
					            </a>

					        </li>
		        		)
		        	}
		        	
		          	<li className="nav-item">
		          		<input onChange={this.props.lessonChange} value={this.props.changeLesson.title} placeholder="Add a new lesson"/>
		          		<a onClick={this.props.addLesson}><i className="plus fa fa-plus"></i></a>
		          		<a onClick={this.props.updateLesson}><i className="plus fa fa-check"></i></a>
		          	</li>
		        </ul>
		      </div>
		    </nav>
		)
	}
}

export default LessonTabs