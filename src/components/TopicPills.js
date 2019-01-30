import React, {Component} from 'react'

class TopicPills extends Component{
	constructor(props){
		super(props);
		this.topics = this.props.topics
		this.state={
			topics:this.props.topics,
			changeTopic : {title:''},
			selectTopic : this.topics[0]
		}
	}

	select = (topic) => {
		this.setState({
			selectTopic : topic
		})
	}  

	topicChange = (event) => {
		this.setState({
			changeTopic: {title: event.target.value}
		})
	}

	addTopic = () => {
		console.log(this.state.topics)
		this.setState({
			topics : [
				...this.state.topics,
				this.state.changeTopic
			]
		})
	}

	deleteTopic = (topicDelete) => {
		this.setState({
			topics: this.state.topics.filter(
				topic => topic !== topicDelete
			)
		})
	}

	editTopic = (topic) => {
		this.setState({
			changeTopic : {title: topic.title}
		})
	}

	updateTopic = () => {
		const addTopics = this.state.topics
		console.log(addTopics)
		for(var i=0;i<addTopics.length;i++){
			if(addTopics[i] === this.state.selectTopic){
				console.log("here")
				addTopics[i].title = this.state.changeTopic.title
			}
		}

		this.setState({
			modules:addTopics
		})

	}

	render(){
		return(
			    <ul className="nav nav-pills">
			    	{
						this.state.topics.map((topic, key) =>

							<li onClick = {() => this.select(topic)} className="nav-item topic-pill">
								<a className={topic==this.state.selectTopic?"nav-link active":"nav-link"} href="#">
								{topic.title}
								<a onClick={() => this.deleteTopic(topic)}>
					            	<i class="fa fa-times"></i>
					            </a>
					            <a onClick={() => this.editTopic(topic)}>
					            	<i class="fa fa-pencil"></i>
					            </a>
								</a>
								
							</li>
						)
			    	}
			    	<li className="nav-item topic-pill">
		          		<input onChange={this.topicChange} value={this.state.changeTopic.title}/>
		          		<a onClick={this.addTopic}><i class="fa fa-plus"></i></a>
		          		<a onClick={this.updateTopic}><i class="fa fa-check"></i></a>
		          	</li>
			    </ul>
		    
		)
	}
}

export default TopicPills