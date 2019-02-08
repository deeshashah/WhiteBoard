import CourseService from "../services/CourseService"
var courseService = new CourseService()

const widgetReducer = (state = {widgets:[], checked: true, loadWidget:true}, action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            const newWidgets = []
            for(var i=0; i<state.widgets.length; i++){
                if(state.widgets[i].id === action.widget.id){
                    delete state.widgets[i];
                }
            }
            return{
                widgets:state.widgets,
                checked: state.checked,
                loadWidget: false
            };
        case 'LOAD_WIDGETS':

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
            state.widgets = courseService.createWidget(action.topicId, {
                type: 'HEADING',
                text: 'New Widget',
                size: 1
            });

            return {
                widgets: state.widgets,
                checked: state.checked,
                loadWidget:false
            };
          default:
              return state;
        }
}
    

export default widgetReducer