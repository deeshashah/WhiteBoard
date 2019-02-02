import React, {Component} from 'react'
import ModuleListItem from './ModuleListItem'

class ModuleList extends Component{
	constructor(props){
		super(props)

		this.state = {
	      module: { title: 'New Module' },
	      modules: this.props.modules,
	      selectModule: ''
	    };

	}
	createModule = () => {
	    this.setState(
	      {
	        modules: [
	          ...this.state.modules,
	          this.state.module
	        ]
	      }
	    )
	    console.log(this.state.modules)
	  }

	select = (module) => {
		this.setState({
			selectModule : module
		})
	}  
	deleteModule = (moduleDelete) => {
		console.log("here")
		this.setState({
			modules: this.state.modules.filter(
				module => module !== moduleDelete
			)
		})
	}
	titleChanged = (event) => {
	    this.setState(
	      {
	        module: {title: event.target.value}
	      });
	  }

	editRow = module => {
	  this.select(module)	
	  this.setState(
	      {
	        module: {title: module.title}
	      });	  
	}  

	updateModule = () => {
		const addModules = this.state.modules
		for(var i=0;i<addModules.length;i++){
			if(addModules[i] === this.state.selectModule){
				addModules[i].title = this.state.module.title
			}
		}

		this.setState({
			modules:addModules
		})

	}

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
		                    deleteModule ={this.deleteModule}
		                    select = {this.select}
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
				        <span className="input-group-text"><a onClick={this.createModule}><i className="cross-topic fa fa-plus"></i></a></span>
				        <span className="input-group-text"><a onClick={this.updateModule}><i className="fa fa-check"></i></a></span>
				      </div>
				    </div>
				</div>	
				
	      	</div>
		)
	}
}

export default ModuleList