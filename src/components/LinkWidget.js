import React, {Component} from 'react'

class LinkWidget extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div class="container widget">
      <div class="row">
        <div class="col-md-8">
          <h3>Link widget</h3>
        </div>
        <div class="col-md-4">
          <button class="btn btn-warning"> <i class="fa fa-arrow-down"></i> </button>
          <button class="btn btn-warning"> <i class="fa fa-arrow-up"></i> </button>
          <select class="inline-select custom-select">
            <option selected="">Link</option>
            <option value="1">Heading</option>
            <option value="1">List</option>
            <option value="2">Paragraph</option>
            <option value="3">Image</option>
          </select>
          <button class="btn btn-danger"> <i class="fa fa-close"></i> </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="http://youtube.com/300/150"/>
          <br></br>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Link text"/>
          <br></br>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="http://youtube.com/300/150"/>
          <br></br>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Widget name"/>
          <h3>Preview</h3>
          <a href="#">Link text</a>
          <br></br>
        </div>
      </div>
    </div>
		)
	}
}

export default LinkWidget