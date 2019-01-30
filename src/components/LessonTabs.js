import React, {Component} from 'react'

class LessonTabs extends Component{
	constructor(props){
		super(props)
		this.state = {
			changeLesson : {title:''},
			lessons : this.props.lessons,
			selectLesson : ''

		}

	}

	select = (lesson) => {
		this.props.selectLesson(lesson);
		this.setState({
			selectLesson : lesson
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
	}

	deleteLesson = (lessonDelete) => {
		this.setState({
			lessons: this.state.lessons.filter(
				lesson => lesson !== lessonDelete
			)
		})
	}

	editLesson = (lesson) => {
		this.setState({
			changeLesson : {title: lesson.title}
		})
	}

	updateLesson = () => {
		const addLessons = this.state.lessons
		for(var i=0;i<addLessons.length;i++){
			if(addLessons[i] === this.state.selectLesson){
				addLessons[i].title = this.state.changeLesson.title
			}
		}

		this.setState({
			modules:addLessons
		})

	}

	render(){
		return (
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="customNavbar">
		      <a class="navbar-brand" href="#">{this.props.title}</a>
		      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		      </button>
		      <div class="collapse navbar-collapse" id="navbarSupportedContent">
		        <ul class="navbar-nav mr-auto">
		        	{

		        		this.state.lessons.map((lesson, key) => 
		        			<li onClick = {() => this.select(lesson)} class="nav-item" key={key}>
					            <a className={lesson==this.props.selectedLesson? "nav-link active" : "nav-link"}>{lesson.title}
					            	<a onClick={() => this.deleteLesson(lesson)}>
					            		<i class="plus fa fa-times"></i>
					            	</a>
					            	<a onClick={() => this.editLesson(lesson)}>
					            		<i class="plus fa fa-pencil"></i>
					            	</a>
					            </a>

					        </li>
		        		)
		        	}

		          	<li class="nav-item">
		          		<input onChange={this.lessonChange} value={this.state.changeLesson.title}/>
		          		<a onClick={this.addLesson}><i class="plus fa fa-plus"></i></a>
		          		<a onClick={this.updateLesson}><i class="plus fa fa-check"></i></a>
		          	</li>
		        </ul>
		      </div>
		    </nav>
		)
	}
}

export default LessonTabs