import React, {Component} from 'react'

class HeadingWidget extends Component{
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="container widget">
			<div className="row">
		        <div className="col-md-8">
		          <h3>Heading widget</h3>
		        </div>
		        <div className="col-md-4">
		          <button className="btn btn-warning"> <i className="fa fa-arrow-down"></i> </button>
		          <button className="btn btn-warning"> <i className="fa fa-arrow-up"></i> </button>
		          <select className="inline-select custom-select">
		            <option selected="">Heading</option>
		            <option value="1">List</option>
		            <option value="2">Paragraph</option>
		            <option value="3">Image</option>
		            <option value="3">Link</option>
		          </select>
		          <button className="btn btn-danger"> <i className="fa fa-close"></i> </button>
		        </div>
		      </div>
	
		    <div className="row">
		        <div className="col-md-12">
		          <div className="form-group">
		          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Heading text"/>
		            
		            <div className="form-group">
		              <select className="custom-select">
		                <option selected="">Heading 1</option>
		                <option value="1">Heading 2</option>
		                <option value="2">Heading 3</option>
		                <option value="3">Heading 4</option>
		              </select>
		            </div>
		            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Heading text"/>
		          </div>
		          <h4>Preview</h4>
		          <h1>Heading text</h1>
		        </div>
		   </div>
		   </div>

		)
	}
}

export default HeadingWidget 