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
            state.widgets = courseService.findWidgets(action.topicId);
            return{
                widgets:state.widgets,
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
        case 'POSITION_DOWN':
            state.widgets = courseService.positionDown(action.widget.id);
            return{
                widgets: state.widgets,
                checked: state.checked,
                loadWidget:false
            };
        case 'POSITION_UP':
            console.log("here");
            state.widgets =courseService.positionUp(action.widget.id);
            return{
                widgets: state.widgets,
                checked: state.checked,
                loadWidget:false
            };
        case 'FIND_WIDGET':
            return courseService.findWidget(action.widget.id);
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            return courseService.findWidgets(action.topicId);
        case 'FIND_ALL_WIDGETS':
            return state.widgets;

          default:
              return state;
        }
}
    

export default widgetReducer