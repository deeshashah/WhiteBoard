import CourseService from "../services/CourseService"
var courseService = new CourseService()

const widgetReducer = (state = {widgets:[], checked: true, loadWidget:true}, action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            state.widgets = courseService.deleteWidget(action.widget.id);

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
            state.widgets = courseService.updateWidget(action.widget.id, action.widget);
            return{
              widgets: state.widgets,
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
        case 'CREATE_WIDGET':
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