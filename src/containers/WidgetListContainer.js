import React from 'react'
import {connect} from 'react-redux'
import Widgets from '../components/Widgets'

const stateToPropertyMapper = state => ({
	widgets : state.widgets,
})

const dispatchToPropertyMatcher = dispatch => ({
	updateWidget : widget =>
		dispatch({
			type:'UPDATE_WIDGET',
			widget : widget,
		}),
})

const WidgetListContainer = connect(stateToPropertyMapper, dispatchToPropertyMatcher)(Widgets)

export default WidgetListContainer