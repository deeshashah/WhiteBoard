import React, {Component} from 'react'


const ModuleListItem = ({module, selectModule, deleteModule, editRow, selectedModule}) =>
	
		<div className={module===selectedModule?"active-topic":"topic"}  onClick={() => selectModule(module)}>
	        <a>
	        	{module.title}
	        </a>
	    	<a onClick={() => deleteModule(module)}><i class="fa fa-times float-right"></i></a>
	    	<a onClick={() => editRow(module)}><i class="fa fa-pencil float-right"></i></a>
  		</div>

export default ModuleListItem