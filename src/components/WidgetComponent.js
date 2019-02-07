import React, {Component} from 'react'
import HeadingWidget from './HeadingWidget'
import ListWidget from './ListWidget'
import ParagraphWidget from './ParagraphWidget'
import ImageWidget from './ImageWidget'
import LinkWidget from './LinkWidget'

function lowerCaseAllWordsExceptFirstLetters(string) {
	return string.replace(/\w\S*/g, function (word) {
		return word.charAt(0) + word.slice(1).toLowerCase();
	});
}

const WidgetComponent = ({widget, updateWidget, checked, deleteWidget}) =>
	<div className="container widget">
		<div className="row">
	        <div className="col-md-8">
				<h4 className="widget-title"><b>{lowerCaseAllWordsExceptFirstLetters(widget.type)} widget {checked}</b></h4>
	        </div>
	        <div className="col-md-4">
	          <button className="btn btn-warning"> <i className="fa fa-arrow-down"></i> </button>
	          <button className="btn btn-warning"> <i className="fa fa-arrow-up"></i> </button>
	          <select
				  onChange={(event)=>{
					  widget.type = event.target.value
					  updateWidget(widget)
				  }}
				  className="inline-select custom-select"
				  value={widget.type}
	          	>
	            <option value="HEADING">Heading</option>
	            <option value="LIST">List</option>
	            <option value="PARAGRAPH">Paragraph</option>
	            <option value="IMAGE">Image</option>
	            <option value="LINK">Link</option>
	          </select>
	          <button className="btn btn-danger" onClick={()=> deleteWidget(widget)}> <i className="fa fa-close"></i> </button>
	        </div>
		</div>
	        {
	        	widget.type === 'HEADING' && <HeadingWidget
	        		updateWidget={updateWidget}
	        		widget={widget}
					checked={checked}/> ||
	        	widget.type ==='LIST' && <ListWidget
	        		updateWidget={updateWidget}
	        		widget={widget}
					checked={checked}/> ||
	        	widget.type === 'PARAGRAPH' && <ParagraphWidget
	        		updateWidget = {updateWidget}
	        		widget ={widget}
					checked={checked}/> ||
	        	widget.type === 'IMAGE' && <ImageWidget
	        		updateWidget={updateWidget}
	        		widget={widget}
					checked={checked}/> ||
	        	widget.type ==='LINK' && <LinkWidget
	        		updateWidget={updateWidget}
	        		widget={widget}
					checked ={checked}/>
	        }
      </div>


export default WidgetComponent;