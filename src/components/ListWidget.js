import React, {Component} from 'react'

class ListWidget extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div class="container widget">
				<div class="row">
			        <div class="col-md-8">
			          <h3>List widget</h3>
			        </div>
			        <div class="col-md-4">
			          <button class="btn btn-warning"> <i class="fa fa-arrow-down"></i> </button>
			          <button class="btn btn-warning"> <i class="fa fa-arrow-up"></i> </button>
			          <select class="inline-select custom-select">
			            <option selected="">List</option>
			            <option value="1">Heading</option>
			            <option value="2">Paragraph</option>
			            <option value="3">Image</option>
			            <option value="3">Link</option>
			          </select>
			          <button class="btn btn-danger"> <i class="fa fa-close"></i> </button>
			        </div>
			      </div>
			      <div class="row">
			        <div class="col-md-12">
			          <div class="form-group">
			            <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Put each item in a separate row"></textarea>
			          </div>
			          
			          <div class="form-group">
			            <select class="custom-select">
			              <option selected="">Unordered List</option>
			              <option value="1">Ordered List</option>
			            </select>
			          </div>
			          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Heading text"/>
			          
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