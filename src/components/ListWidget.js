import React from 'react'

const ListWidget = ({widget, updateWidget, checked}) =>

	      <div className="row">
	        <div className="col-md-12">
				{
					checked? <div>
						<div className="form-group">
						<textarea
							className="form-control"
							value={widget.items}
							onChange={event => {
								widget.items = event.target.value
								updateWidget(widget)
							}}
						>
						</textarea>
								</div>

								<div className="form-group">
									<select className="custom-select"
											onChange={event => {
												widget.option = parseInt(event.target.value)
												updateWidget(widget)
											}}>
										<option value="1">Ordered List</option>
										<option value="2">Unordered List</option>
									</select>
								</div>
								<input
									type="text"
									className="form-control"
									placeholder="Widget name"/>
							</div>:''
				}


	          <h3>Preview</h3>
	          {
	          	widget.option===1 && <ol>
		          {   		
		          	widget.items.replace(/\n/g, ",").split(",").map(item =>
		          		<li>{item}</li>
		          	)	          	
		          }
		          </ol> ||

		        widget.option===2 && <ul>
		          {   		
		          	widget.items.replace(/\n/g, ",").split(",").map(item =>
		          		<li>{item}</li>
		          	)	          	
		          }
		          </ul>
	          }
	          
	        </div>
		    </div>


export default ListWidget