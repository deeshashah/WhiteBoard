import courses from './courses.json'

// const topics = [

//               {
//               	"id" : 1
//                 "title": "DOM",
//                 "widgets": [
//                   {
//                     "type": "HEADING",
//                     "size": 1,
//                     "text": "The Document Object Model"
//                   },
//                   {
//                     "type": "PARAGRAPH",
//                     "text": "This topic introduces the DOM"
//                   },
//                   {
//                     "type": "LIST",
//                     "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
//                   },
//                   {
//                     "type": "IMAGE",
//                     "src": "https://picsum.photos/200"
//                   },
//                   {
//                     "type": "LINK",
//                     "title": "The DOM",
//                     "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
//                   }
//                 ]
//                }
//             ]

class CourseService{
	constructor(){
		this.courses = courses;
		//this.topics = topics;
	}

	createCourse = course => {
		if(course == null){
			course = {
				id : (new Date()).getTime(),
				title: 'New Course'
			}
		}

		this.courses.push(course)
		return this.courses
	}

	findCourseById = courseId => {
		for(var i=0;i<this.courses.length;i++){
			if(this.courses[i].id == courseId){
				return this.courses[i];
			}
		}
	}

	findAllCourses = () => {
		 return this.courses
	}

	deleteCourse = deleteCourse => {
		this.courses = this.courses.filter(
				course => course.id !== deleteCourse.id
			)
		return this.courses
	}

	updateCourse = (id, course) => {
		for(var i=0;i<this.courses.length;i++){
			if(this.courses[i] == id){
				this.courses[i] = course
			}
		}
	}

	createModule = (courseId, module) => {
		for(var i=0; i<this.courses.length; i++){
			if(this.courses[i].id === courseId){
				this.courses[i].modules =
					[
						...this.courses[i].modules,
						module
					]
				return this.courses[i]

			}
		}
	};

	deleteModule = (courseId, deleteModule) => {
		for(var i=0; i<this.courses.length; i++){
			if(this.courses[i].id === courseId){
				this.courses[i].modules =
					this.courses[i].modules.filter(
						module => module.id !== deleteModule.id
					);
				return this.courses[i]

			}
		}
	};

	updateModule = (courseId, updateModule, newTitle) => {
		for(var i=0; i<this.courses.length; i++){
			if(this.courses[i].id === courseId){
				var modules = this.courses[i].modules;
				for(var j=0;j<modules.length; j++){
					if(modules[j].id === updateModule.id){

						modules[j].title = newTitle;
						console.log("module" + modules[j].title);



					}
				}
				this.courses[i].modules = modules;
				console.log(this.courses[i]);
				return this.courses[i];




			}
		}
	};

	createWidget = (topicId, widget) => {
        for(var i=0; i<this.courses.length; i++){
            var modules = this.courses[i].modules;
            for(var j=0; j<modules.length;j++){
                var lessons = modules[j].lessons;
                for(var k=0; k<lessons.length;k++){
                    var topics = lessons[k].topics;
                    for(var l=0; l<topics.length; l++){
                        if(topics[l].id === topicId){
                            topics[l].widgets.push(widget);
                            return topics[l].widgets;
                        }
                    }

                }
            }
        }
	};

	findWidgets = (topicId) => {
		for(var i=0; i<this.courses.length; i++){
			var modules = this.courses[i].modules;
			for(var j=0; j<modules.length;j++){
				var lessons = modules[j].lessons;
				for(var k=0; k<lessons.length;k++){
					var topics = lessons[k].topics;
					for(var l=0; l<topics.length; l++){
						if(topics[l].id === topicId){
							return topics[l].widgets;
						}
					}

				}
			}
		}
	};

	findWidget = (widgetId) => {
		for(var i=0; i<this.courses.length; i++){
			var lessons = this.courses[i].lessons;
			for(var j=0; j<lessons.length;j++){
				var topics = lessons[j].topics;
				for(var k=0; k<topics.length;k++){
					var widgets = topics[k].widgets;
					for(var w=0; w<widgets.length; w++){
						if(widgets[w].id === widgetId){
							return widgets[w];
						}
					}
				}
			}
		}
	};

    updateWidget = (widgetId, widget) => {
        for(var i=0; i<this.courses.length; i++){
            var modules = this.courses[i].modules;
            for(var j=0; j<modules.length;j++){
                var lessons = modules[j].lessons;
                for(var k=0; k<lessons.length;k++){
                    var topics = lessons[k].topics;
                    for(var l=0; l<topics.length; l++){
                        var widgets = topics[l].widgets
                        for(var m=0; m<widgets.length; m++){
                            if(widgets[m].id===widgetId){
                                widgets = widgets.map(widget =>
                                    widget.id === widgetId ? widget : widget)
                                return widgets;
                            }
                        }
                    }

                }
            }
        }
    };

    deleteWidget = (widgetId) => {
        for(var i=0; i<this.courses.length; i++){
            var modules = this.courses[i].modules;
            for(var j=0; j<modules.length;j++){
                var lessons = modules[j].lessons;
                for(var k=0; k<lessons.length;k++){
                    var topics = lessons[k].topics;
                    for(var l=0; l<topics.length; l++){
                        var widgets = topics[l].widgets
                        for(var m=0; m<widgets.length; m++){
                            if(widgets[m].id===widgetId){
                                widgets.splice(m, 1);
                                return widgets;
                            }
                        }
                    }

                }
            }
        }
    };

    positionDown = (widgetId) => {
		for(var i=0; i<this.courses.length; i++){
			var modules = this.courses[i].modules;
			for(var j=0; j<modules.length;j++){
				var lessons = modules[j].lessons;
				for(var k=0; k<lessons.length;k++){
					var topics = lessons[k].topics;
					for(var l=0; l<topics.length; l++){
						var widgets = topics[l].widgets
						for(var m=0; m<widgets.length; m++){
							if(widgets[m].id===widgetId){
								var w = widgets[m];
								widgets.splice(m, 1);
								widgets.push(w);
								return widgets;
							}
						}
					}

				}
			}
		}
	}

	positionUp = (widgetId) => {
		for(var i=0; i<this.courses.length; i++){
			var modules = this.courses[i].modules;
			for(var j=0; j<modules.length;j++){
				var lessons = modules[j].lessons;
				for(var k=0; k<lessons.length;k++){
					var topics = lessons[k].topics;
					for(var l=0; l<topics.length; l++){
						var widgets = topics[l].widgets
						for(var m=0; m<widgets.length; m++){
							if(widgets[m].id===widgetId){
								var w = widgets[m];
								widgets.splice(m, 1);
								widgets.unshift(w);
								console.log(widgets);
								return widgets;
							}
						}
					}

				}
			}
		}
	}
}

export default CourseService