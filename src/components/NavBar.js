import React, {Component} from 'react'
import '../App.css'


class NavBar extends Component{
	constructor(props){
		super(props);

		this.newCourse = ""
	}


	formChanged = (event) => {
		this.newCourse = event.target.value;
	}



	render(){
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<a className="navbar-brand" href="#"><b>Course Manager</b></a>
						<a className="btn btn-primary" href="#">Home</a>
						<input onChange={this.formChanged}/>
						<a onClick={() => this.props.addCourse(this.newCourse)} className="non-float">
					    <i className="fa fa-plus plus-button"></i>
					    
					</a>
				</nav>

				<div className="collapse navbar-collapse" id="navbarColor01">
					<form className="form-inline">
							<input className="form-control mr-sm-2" type="text" placeholder="New Course title"/>
					      <a href="#" className="non-float">
					        <i className="fa fa-plus plus-button"></i>
					      </a>
					</form>
				</div>
			</div>
			
		)
	}


}

export default NavBar;