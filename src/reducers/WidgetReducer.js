import CourseService from "../services/CourseService"
var courseService = new CourseService()

const widgets= [
    {
        id: 801,
        name: "Heading",
        type: "HEADING",
        text: "The DOM",
        size: 1
    },
    {
        id: 802,
        name: "Paragraph",
        type: "PARAGRAPH",
        text: "This topic introduces the DOM"
    },
    {
        id: 803,
        name: "Image",
        type: "IMAGE",
        src: "https://picsum.photos/200"
    },
    {
        id: 811,
        name: "Link",
        type: "LINK",
        href: "flatcolors.io",
        title: "www.flatcolors.io"
    },
    {
        id : 514,
        name: "image",
        type: "LIST",
        option: 1,
        items: "Nodes,Attributes,Tag names,IDs,Styles,Classes"
    }

];


const widgetReducer = (state = {widgets:widgets, checked: true, loadWidget:true}, action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            state.widgets = courseService.deleteWidget(action.widget.id);

            return{
                widgets:state.widgets,
                checked: state.checked,
                loadWidget: false
            };
        case 'FIND_ALL_WIDGETS_FOR_TOPIC':
            //state.widgets = courseService.findWidgets(action.topicId);
            console.log(state.widgets);
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
        case 'FIND_ALL_WIDGETS':
            return state.widgets;

          default:
              return state;
        }
};
    

export default widgetReducer