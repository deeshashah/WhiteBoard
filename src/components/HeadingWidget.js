import React, {Component} from 'react'

class HeadingWidget extends Component{
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div class="container widget">
			<div class="row">
		        <div class="col-md-8">
		          <h3>Heading widget</h3>
		        </div>
		        <div class="col-md-4">
		          <button class="btn btn-warning"> <i class="fa fa-arrow-down"></i> </button>
		          <button class="btn btn-warning"> <i class="fa fa-arrow-up"></i> </button>
		          <select class="inline-select custom-select">
		            <option selected="">Heading</option>
		            <option value="1">List</option>
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
		          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Heading text"/>
		            
		            <div class="form-group">
		              <select class="custom-select">
		                <option selected="">Heading 1</option>
		                <option value="1">Heading 2</option>
		                <option value="2">Heading 3</option>
		                <option value="3">Heading 4</option>
		              </select>
		            </div>
		            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Heading text"/>
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