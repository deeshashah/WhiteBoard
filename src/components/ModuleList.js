import React, {Component} from 'react'
import ModuleListItem from './ModuleListItem'
import ModuleService from "../services/ModuleService";

class ModuleList extends Component{
	constructor(props){
		super(props);
		this.moduleService = new ModuleService();

		this.state = {

		    modules:[],
			module: { title: '' },
	    };
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.course !== this.props.course){
			this.findAllModules(nextProps.course.id);
			this.setState({
				course: nextProps.course,

				})
		}
	}

	findAllModules = (courseId) => {
		console.log(courseId);
		this.moduleService.findAllModules(courseId).then(

			modules =>
				this.setState({
					modules:modules,
				})
		);};

	titleChanged = (event) => {
		const id = this.state.module.id;
		console.log(id);
	    this.setState(
	      {
	        module: {id: id,title: event.target.value}
	      });
	  };


	editRow = module => {
		this.props.selectModule(module);
		const id = module.id;
		this.setState(
			{
				module: {id: id, title: module.title}
			});
	};


	render(){

		return(
			<div>

				{
		            this.state.modules.map(
		              (module) => {
		                return (
		                  <ModuleListItem
		                    selectModule={this.props.selectModule}
		                    key={module.id}
		                    module={module}
		                    deleteModule ={this.props.deleteModule}
		                    editRow={this.editRow}
		                    selectedModule={this.props.selectedModule}/>
		                )
		              }
		            )
		          }

	      		<div className="form-group add-module">
				    <div className="input-group mb-3">
				      <input onChange={this.titleChanged} value={this.state.module.title} type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
				      <div className="input-group-append">
				        <span className="input-group-text"><a onClick={() => this.props.createModule(this.state.module)}><i className="cross-topic fa fa-plus"></i></a></span>
				        <span className="input-group-text"><a onClick={() => this.props.updateModule(this.state.module)}><i className="fa fa-check"></i></a></span>
				      </div>
				    </div>
				</div>
				
	      	</div>
		)
	}
}

export default ModuleList