import React, {Component} from 'react'
import '../App.css'

class TopicPills extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			    <ul className="nav nav-pills topic-pills">
			    	{
						this.props.topics.map((topic, key) =>

							<li onClick = {() => this.props.selectTopic(topic)} className="nav-item topic-pill">
								<a className={topic==this.props.selectedTopic?"nav-link active":"nav-link"} href="#">
								{topic.title}
								<a onClick={() => this.props.deleteTopic(topic)}>
					            	<i class="fa fa-times"></i>
					            </a>
					            <a onClick={() => this.props.editTopic(topic)}>
					            	<i class="fa fa-pencil"></i>
					            </a>
								</a>
								
							</li>
						)
			    	}
			    	<li className="nav-item topic-pill">
		          		<input onChange={this.props.topicChange} value={this.props.changeTopic.title} placeholder="Add a new topic"/>
		          		<a onClick={this.props.addTopic}><i class="fa fa-plus"></i></a>
		          		<a onClick={this.props.updateTopic}><i class="fa fa-check"></i></a>
		          	</li>
			    </ul>
		    
		)
	}
}

export default TopicPills