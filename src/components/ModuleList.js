import React, {Component} from 'react'
import ModuleListItem from './ModuleListItem'

class ModuleList extends Component{
	constructor(props){
		super(props)

		this.state = {
	      module: { title: '' },
	      modules: this.props.modules,
	      moduleEdited:"",

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
	  this.setState(
	      {
	        module: {title: module}
	      });	  
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
		                    editRow={this.editRow}/>
		                )
		              }
		            )
		          }

	      		<div class="form-group add-module">
				  <div class="form-group">
				    <div class="input-group mb-3">
				      <div class="input-group-prepend">
				      </div>
				      <input onChange={this.titleChanged} value={this.state.module.title} type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
				      <div class="input-group-append">
				        <span class="input-group-text"><a onClick={this.createModule}><i class="cross-topic fa fa-plus"></i></a></span>
				      </div>
				    </div>
				  </div>
				</div>	
				
	      	</div>
		)
	}
}

export default ModuleList