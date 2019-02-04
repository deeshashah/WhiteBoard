const widgets = {
    widgets: [
                  {
                    "id": 1,
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
                  },
                  {
                    "id" : 2,
                    "type": "PARAGRAPH",
                    "text": "This topic introduces the DOM"
                  },
                  {
                    "id" : 3,
                    "type": "LIST",
                    "option" : 1,
                    "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                  },
                  {
                    "id" : 4,
                    "type": "IMAGE",
                    "src": "https://picsum.photos/200"
                  },
                  {
                    "id" : 5,
                    "type": "LINK",
                    "title": "The DOM",
                    "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                  }
              ]
              
}
const widgetReducer = (state = widgets, action) => {
    switch(action.type){
      case 'UPDATE_WIDGET':
        return{
          widgets: state.widgets.map(widget =>
            widget.id === action.widget.id ? action.widget : widget)
        }
      default:
          return state;
    }
}
    

export default widgetReducer