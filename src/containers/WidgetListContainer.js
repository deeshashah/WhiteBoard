import React from 'react'
import {connect} from 'react-redux'
import Widgets from '../components/Widgets'

const stateToPropertyMapper = (state, ownProps) =>({
	widgets:state.widgets,
});



const dispatchToPropertyMatcher = (dispatch, ownProps) => ({
	updateWidget : widget =>
		dispatch({
			type:'UPDATE_WIDGET',
			widget : widget,
		}),
	loadWidgets : () =>
	{
		dispatch({
			type:'LOAD_WIDGETS',
			widgets : ownProps.widgets,
		})}
});

const WidgetListContainer = connect(stateToPropertyMapper, dispatchToPropertyMatcher)(Widgets)

export default WidgetListContainer