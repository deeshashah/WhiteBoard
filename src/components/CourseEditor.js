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
			module : this.course.modules[0],
		}
	}

	selectModule = (module) => {
		this.setState({
			module : module
		})
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
					        />
					        
					    </div>
					</div>

					<div className="col-8">
						Other
					</div>
				</div>
			</div>		
		)
	}

}

export default CourseEditor;