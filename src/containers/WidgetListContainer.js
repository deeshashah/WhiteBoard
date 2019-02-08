import React from 'react'
import {connect} from 'react-redux'
import Widgets from '../components/Widgets'

const stateToPropertyMapper = (state) =>({
	widgets:state.widgets,
	checked : state.checked,
	loadWidget:state.loadWidget
});



const dispatchToPropertyMatcher = (dispatch, ownProps) => ({
	updateWidget : widget =>
		dispatch({
			type:'UPDATE_WIDGET',
			widget : widget,
		}),
	loadWidgets : () =>
		dispatch({
			type:'LOAD_WIDGETS',
			widgets : ownProps.widgets,
		}),
	togglePreview: () =>
		dispatch({
			type:'TOGGLE_PREVIEW',
		}),

	deleteWidget: (widget) =>
		dispatch({
			type:'DELETE_WIDGET',
			widget: widget
		}),

	addWidget : () =>
		dispatch({
			type: 'CREATE_WIDGET',
			topicId: ownProps.topic.id

		})

});

const WidgetListContainer = connect(stateToPropertyMapper, dispatchToPropertyMatcher)(Widgets)

export default WidgetListContainer