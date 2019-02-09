import React, {Component} from 'react'
import WidgetComponent from './WidgetComponent'

const Widgets = ({widgets, updateWidget, loadWidgets, checked, togglePreview, deleteWidget, addWidget, changePositionDown, changePositionUp}) =>{
		loadWidgets();
		return(<div>


			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<h5><small>There are {widgets.length} widgets for this topic. {checked}</small></h5>
					</div>
					<div className="col-md-1">
						<button className="btn btn-success">Save</button>
					</div>
					<div className="col-md-2" >
						<div className="form-group">
							<span className="switch">
							<label>Preview: </label>
							  <input type="checkbox" className="switch" id="switch-id" onChange={togglePreview}/>
							  <label htmlFor="switch-id"></label>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="list-group">
			{
				widgets.map(widget =>
					<WidgetComponent
						widget={widget}
						name={widget.name}
						updateWidget={updateWidget}
						checked={checked}
						deleteWidget={deleteWidget}
						changePositionDown={changePositionDown}
						changePositionUp={changePositionUp}
					/>

				)
			}
			</div>
			<button className="btn btn-danger" onClick={addWidget}>Add</button>
		</div>)

}


export default Widgets