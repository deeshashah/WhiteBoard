import React, {Component} from 'react'


const ModuleListItem = ({module, selectModule, deleteModule, editModule}) =>
	
		<div class="topic">
	        <a onClick={() => selectModule(module)}>
	        	{module.title}
	        </a>
	    	<a onClick={() => deleteModule(module)}><i class="fa fa-times float-right"></i></a>
  		</div>

export default ModuleListItem