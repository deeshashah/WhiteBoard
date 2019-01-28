import React, {Component} from 'react'
import CourseService from "../services/CourseService"
import ModuleList from "./ModuleList"

class CourseEditor extends Component{
	constructor(props){
		super(props);
		this.courseService = new CourseService()
		this.courseId = parseInt(props.match.params.id)
		this.course = this.courseService.findCourseById(this.courseId)
		this.state={
			course : this.course,
			module : "",
		}
	}

	selectModule = module => {
		this.setState({
	      module: module
	    });
	}
	    

	// updateModule = (id, updatedModule) => {
	// 	this.selectModule(updatedModule);
	// 	console.log("UPDATEDMODULE"+updatedModule.title);
	// 	console.log("STATE:"+this.state.module.title);
	// 	for(var i=0; i<this.state.course.modules.length; i++){
	// 		console.log(this.state.course.modules[i] === this.state.module)
	// 		console.log(this.state.course.modules[i])
	// 		console.log(this.state.module)
	// 		console.log("---"+i)
	// 		if(this.state.course.modules[i] === this.state.module){
	// 			this.state.course.modules[i] = updatedModule;
	// 			console.log(i)
	// 		}
	// 	}

	// 	for(var i=0; i<this.state.course.modules.length; i++){
			
	// 		console.log("updated"+this.state.course.modules[i].title)
			
	// 	}
	// 	this.setState({
	// 		module : ""
	// 	})
	// }

	updateModule = (module, id) => {
		console.log(id)
		const allModules = this.state.course.modules
		console.log(allModules)
		console.log("MODULE TITLE"+this.state.module.title)
		for(var i=0; i<allModules.length; i++){
			console.log(allModules[i].title)
			if(allModules[i].title === module.title){
				console.log("here")
				allModules[i] = { title: module.title }
				// console.log(this.allModules[i].title);
			}
		}

		for(var i=0; i<allModules.length; i++){
			console.log(allModules[i].title)
		}

	}
	
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-4">
						<div className="sidenav">
							<ModuleList
								course={this.state.course}
					            selectModule={this.selectModule}
					            modules={this.course.modules}
					            updateModule={this.updateModule}
					        />
					        
					    </div>
					</div>

					<div className="col-8">
						{this.state.module.title}
					</div>
				</div>
			</div>		
		)
	}

}

export default CourseEditor;