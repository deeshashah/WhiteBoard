import React, {Component} from 'react'
import HeadingWidget from './HeadingWidget'
import ListWidget from './ListWidget'
import ParagraphWidget from './ParagraphWidget'
import ImageWidget from './ImageWidget'
import LinkWidget from './LinkWidget'
import WidgetComponent from './WidgetComponent'

const preview = () => {
	var p = document.getElementById("switch-id");
	console.log("preview"+p);
	// return p.checked
}

const Widgets = ({widgets, updateWidget, loadWidgets, checked, togglePreview}) =>{
		loadWidgets();
		console.log({checked});
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
						key={widget.id}
						widget={widget}
						updateWidget={updateWidget}
						checked={checked}
					/>

				)
			}
			</div>
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