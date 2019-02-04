import React, {Component} from 'react'

const HeadingWidget = ({widget, updateWidget}) =>
			<div className="container widget">

			    <div className="row">
			        <div className="col-md-12">
			          <div className="form-group">
			          <input 
			          	type="text" 
			          	className="form-control"
			          	placeholder="Heading text"
			          	value={widget.text}
			          	onChange={event => {
			            		widget.text = event.target.value
			            		updateWidget(widget)
			            	}}/>
			            <br></br>
			            <div className="form-group">
			              <select className="custom-select"
			              	onChange={event => {
			              		widget.size = parseInt(event.target.value)
			              		updateWidget(widget)
			              	}}>
			                <option value="1">Heading 1</option>
			                <option value="2">Heading 2</option>
			                <option value="3">Heading 3</option>
			                <option value="4">Heading 4</option>
			                <option value="5">Heading 5</option>
			              </select>
			            </div>
			            <input type="text" 
			            	className="form-control" 
			            	id="exampleInputEmail1" 
			            	aria-describedby="emailHelp" 
			            	placeholder="Widget name"
			            	/>
			          </div>
			          <h4>Preview</h4>
			          {
			          	widget.size === 1 && <h1>{widget.text}</h1> ||
			          	widget.size === 2 && <h2>{widget.text}</h2> ||
			          	widget.size === 3 && <h3>{widget.text}</h3> ||
			          	widget.size === 4 && <h4>{widget.text}</h4> ||
			          	widget.size === 5 && <h5>{widget.text}</h5> 
			          }
			        </div>
			   </div>
		   </div>

		
	


export default HeadingWidget 