
function toggle (state) {
    var newState = Object.assign({}, state);

    newState.checked = !newState.checked;
    return newState;
}

const widgetReducer = (state = {widgets:[], checked: true, loadWidget:true}, action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            console.log(state.widgets.filter(widget => widget.id !== action.widget.id));
            return{
                widgets:state.widgets.filter(widget => widget.id !== action.widget.id),
                checked: state.checked,
                loadWidget: false
            };
        case 'LOAD_WIDGETS':
            state.widgets = action.widgets;
            return{
                widgets:action.widgets,
                checked: state.checked,
                loadWidget: true,

            };
          case 'UPDATE_WIDGET':
            return{
              widgets: state.widgets.map(widget =>
                widget.id === action.widget.id ? action.widget : widget),
                checked:state.checked,
                loadWidget: false

            };
        case 'TOGGLE_PREVIEW':
            console.log("state"+state.checked);
            var s = !state.checked;
            var w = state.widgets
            return{
                widgets:w,
                checked: s,
                loadWidget: false
            };
        case 'ADD_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        text: 'New Widget',
                        size: 1
                    }
                ],
                checked: state.checked,
                loadWidget:false
            };
          default:
              return state;
        }
}
    

export default widgetReducer