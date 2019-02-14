import React, {Component} from 'react'


const ModuleListItem = ({module, selectModule, deleteModule, editRow, selectedModule}) =>
	
		<div className="topic">
	        <div id="modulediv" className={module.id===selectedModule.id?"active-topic":""}><a   onClick={() => selectModule(module)}>
	        	{module.title}
			</a></div>
			<button className="btn btn-danger btn-sm float-right" onClick={() => deleteModule(module)}><i className="fa fa-times"></i></button>
	    	<button className="btn btn-warning btn-sm float-right" onClick={() => editRow(module)}><i className="fa fa-pencil"></i></button>
  		</div>

export default ModuleListItem