import React, {Component} from 'react'

class ImageWidget extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="container widget">
      <div className="row">
        <div className="col-md-8">
          <h3>Image widget</h3>
        </div>
        <div className="col-md-4">
          <button className="btn btn-warning"> <i className="fa fa-arrow-down"></i> </button>
          <button className="btn btn-warning"> <i className="fa fa-arrow-up"></i> </button>
          <select className="inline-select custom-select">
            <option selected="">Image</option>
            <option value="1">List</option>
            <option value="2">Paragraph</option>
            <option value="3">Heading</option>
            <option value="3">Link</option>
          </select>
          <button className="btn btn-danger"> <i className="fa fa-close"></i> </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="http://lorempixel.com/300/150"/>
          <br></br>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Widget text"/>
          <br></br>
          <h3>Preview</h3>
          <img src="https://via.placeholder.com/150"/>
          <br></br>
        </div>
      </div>
    </div>
		)
	}
}

export default ImageWidget