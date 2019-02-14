import React, {Component} from 'react'
import TopicService from '../services/TopicService'


class TopicPills extends Component{
	constructor(props){
		super(props)
		this.topicService = new TopicService();

		this.state={
			lesson :'',
			topics : [],
			topic : {title:''},
		}
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		if(nextProps.lesson !== this.props.lesson){
			console.log("HERE");
			this.findAllTopics(nextProps.lesson.id);
			this.setState({
				lesson: nextProps.lesson})
		}
	}

	findAllTopics = (lessonId) => {
		console.log("LESSON-ID"+lessonId);
		this.topicService.findAllTopics(lessonId)
			.then(topics =>
				this.setState({
					topics:topics,
				}));
	};

	titleChanged = (event) => {
		console.log(event.target.value);
		const id = this.state.topic.id;
		this.setState(
			{
				topic: {id: id,title: event.target.value}
			});
	};

	editTopic = topic => {
		this.props.selectTopic(topic);
		const id = topic.id;
		this.setState(
			{
				topic: {id: id, title: topic.title}
			});
	};

	render(){
		return(
			    <ul className="nav nav-pills topic-pills">
			    	{
						this.state.topics.map((topic, key) =>

							<li className="nav-item topic-pill">
								<div className="topicdiv">
								<h6 onClick = {() => this.props.selectTopic(topic)} className={topic.id==this.props.selectedTopic.id?"topictitle activetopic":"topictitle"}  href="#">
								{topic.title}</h6>
								<button className="btn btn-secondary btn-sm" onClick={() => this.props.deleteTopic(topic)}>
					            	<i class="fa fa-times"></i>
					            </button>
					            <button className="btn btn-secondary btn-sm" onClick={() => this.editTopic(topic)}>
					            	<i class="fa fa-pencil"></i>
					            </button>
								</div>

							</li>
						)
			    	}
					<li className="nav-item">
						<div className="form-inline margindiv">
							<input onChange={this.titleChanged} value={this.state.topic.title} type="text" className="form-control topicinput" placeholder="Enter topic" id="inputDefault"/>
							<button className="btn btn-danger btn-sm" onClick={() => this.props.createTopic(this.state.lesson.id, this.state.topic)}>
								<i className="fa fa-plus"></i>
							</button>
							<button className="btn btn-danger btn-sm" onClick={() => this.props.updateTopic(this.state.topic)}>
								<i className="fa fa-check"></i>
							</button>
						</div>
					</li>
			    </ul>
		    
		)
	}
}

export default TopicPills