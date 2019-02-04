import React, {Component} from 'react'
import HeadingWidget from './HeadingWidget'
import ListWidget from './ListWidget'
import ParagraphWidget from './ParagraphWidget'
import ImageWidget from './ImageWidget'
import LinkWidget from './LinkWidget'
import WidgetComponent from './WidgetComponent'


const Widgets = ({widgets, updateWidget}) => 
	<div>
		<h3>Widgets : {widgets.length}</h3>
		{
			widgets.map(widget =>
				<WidgetComponent
					key={widget.id}
					widget={widget}
					updateWidget={updateWidget}
				/>
			)
		}
	</div>


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