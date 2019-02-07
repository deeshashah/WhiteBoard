
function toggle (state) {
    var newState = Object.assign({}, state);

    newState.checked = !newState.checked;
    return newState;
}

const widgetReducer = (state = {widgets:[], checked: true}, action) => {
    switch(action.type){
        case 'LOAD_WIDGETS':
            state.widgets = action.widgets;
            return{
                widgets:action.widgets,
                checked: state.checked

            };
          case 'UPDATE_WIDGET':
            return{
              widgets: state.widgets.map(widget =>
                widget.id === action.widget.id ? action.widget : widget),

            };
        case 'TOGGLE_PREVIEW':
            console.log("state"+state.checked);
            var s = !state.checked;
            var w = state.widgets
            return{
                widgets:w,
                checked: s
            };
          default:
              return state;
        }
}
    

export default widgetReducer