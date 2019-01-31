import React, {Component} from 'react'

class LessonTabs extends Component{
	constructor(props){
		super(props)
	}

	
	render(){
		return (
			<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			        <span class="navbar-toggler-icon"></span>
			    </button>
			    <a class="navbar-brand" href="#">
			        <span class="menu-collapsed">{this.props.course.title} - {this.props.module.title}</span>
			    </a>
		      <div class="collapse navbar-collapse" id="navbarNavDropdown">
		        <ul class="navbar-nav">
		        	{

		        		this.props.lessons.map((lesson, key) => 
		        			<li onClick = {() => this.props.selectLesson(lesson)} className={lesson==this.props.selectedLesson? "nav-item active" : "nav-item"} key={key}>
					            <a className="nav-link">{lesson.title}
					            	<a onClick={() => this.props.deleteLesson(lesson)}>
					            		<i class="plus fa fa-times"></i>
					            	</a>
					            	<a onClick={() => this.props.editLesson(lesson)}>
					            		<i class="plus fa fa-pencil"></i>
					            	</a>
					            </a>

					        </li>
		        		)
		        	}
		        	
		          	<li class="nav-item">
		          		<input onChange={this.props.lessonChange} value={this.props.changeLesson.title} placeholder="Add a new lesson"/>
		          		<a onClick={this.props.addLesson}><i class="plus fa fa-plus"></i></a>
		          		<a onClick={this.props.updateLesson}><i class="plus fa fa-check"></i></a>
		          	</li>
		        </ul>
		      </div>
		    </nav>
		)
	}
}

export default LessonTabs