import React, {Component} from 'react'
import WidgetComponent from './WidgetComponent'

const Widgets = ({widgets, updateWidget, loadWidgets, checked, togglePreview, deleteWidget, loadWidget, addWidget}) =>{
		loadWidgets();
		return(<div>

			<h3>Widgets : {widgets.length} {checked}</h3>
			<div className="container">
				<div className="row">
					<div className="col-md-10">
					</div>
					<div className="col-md-1">
						<button className="btn btn-success">Save</button>
					</div>
					<div className="col-md-1" >
						<div className="form-group">
							<span className="switch">
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
						updateWidget={updateWidget}
						checked={checked}
						deleteWidget={deleteWidget}
					/>

				)
			}
			</div>
			<button className="btn btn-danger" onClick={addWidget}>Add</button>
		</div>)

}



// class Widgets extends Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return(
// 			<div>
// 		    	<HeadingWidget/>
// 		    	<br></br>
// 		    	<br></br>
// 		    	<ListWidget/>  
// 		    	<br></br>
// 		    	<br></br>
// 		    	<ParagraphWidget/>
// 		    	<br></br>
// 		    	<br></br>
// 		    	<ImageWidget/>
// 		    	<br></br>
// 		    	<br></br>
// 		    	<LinkWidget/>
// 		    	<br></br>
// 		  	</div>
		    

		    
// 		)
// 	}

// }

export default Widgets