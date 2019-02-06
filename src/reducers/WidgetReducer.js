

const widgetReducer = (state = {widgets:[]}, action) => {
    switch(action.type){
        case 'LOAD_WIDGETS':
            state.widgets = action.widgets;
            return{
                widgets:action.widgets
            };
          case 'UPDATE_WIDGET':
            return{
              widgets: state.widgets.map(widget =>
                widget.id === action.widget.id ? action.widget : widget)
            };
          default:
              return state;
        }
}
    

export default widgetReducer