import React, {Component} from 'react'

class ListWidget extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="container widget">
				<div className="row">
			        <div className="col-md-8">
			          <h3>List widget</h3>
			        </div>
			        <div className="col-md-4">
			          <button className="btn btn-warning"> <i className="fa fa-arrow-down"></i> </button>
			          <button className="btn btn-warning"> <i className="fa fa-arrow-up"></i> </button>
			          <select className="inline-select custom-select">
			            <option selected="">List</option>
			            <option value="1">Heading</option>
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
			            <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Put each item in a separate row"></textarea>
			          </div>
			          
			          <div className="form-group">
			            <select className="custom-select">
			              <option selected="">Unordered List</option>
			              <option value="1">Ordered List</option>
			            </select>
			          </div>
			          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Heading text"/>
			          
			          <h3>Preview</h3>
			          <ul>
			            <li>Put each</li>
			            <li>item in</li>
			            <li>a separate row</li>
			          </ul>
			        </div>
			    </div>
		    </div>
		)
	}
}

export default ListWidget