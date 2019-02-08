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

		}),

	changePositionDown : (widget) =>
		dispatch({
			type:'POSITION_DOWN',
			widget: widget
		}),

	changePositionUp : (widget) =>
		dispatch({
			type:'POSITION_UP',
			widget: widget
		}),

	findWidget : (widget) =>
		dispatch({
			type: 'FIND_WIDGET',
			widget:widget
		}),

	loadWidgets : (widget) =>
		dispatch({
			type:'FIND_ALL_WIDGETS_FOR_TOPIC',
			widget:widget,
			topicId: ownProps.topic.id

		}),

	findAllWidgets : (widget) =>
		dispatch({
			type:'FIND_ALL_WIDGETS',
		})


});

const WidgetListContainer = connect(stateToPropertyMapper, dispatchToPropertyMatcher)(Widgets)

export default WidgetListContainer