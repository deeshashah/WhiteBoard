//import courses from './courses.json'
const PROXY = 'https://cors-anywhere.herokuapp.com/';
const COURSE_API_URL = PROXY+'http://whiteboard-webservice.herokuapp.com/api/courses/';

const courses = [
    {
        id: 234,
        title: "CS4500",
        modules: [
            {
                id: 123,
                title: "Week1",
                lessons: [
                    {
                        id: 301,
                        title: "HTML",
                        topics: [
                            {
                                id: 601,
                                title: "The DOM",
                                widgets: [
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
                                        "id" : "514",
                                        "name": "image",
                                        "type": "LIST",
                                        "option": 1,
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    }
                                ]
                            },
                            {
                                id: 602,
                                title: "Tags",
                                widgets: [
                                    {
                                        id: 803,
                                        name: "Heading",
                                        type: "HEADING",
                                        text: "Tags",
                                        size: 1
                                    },
                                    {
                                        id: 804,
                                        name: "Paragraph",
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the tags in HTMl"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 302,
                        title: "CSS",
                        topics: [
                            {
                                id: 603,
                                title: "Borders",
                                widgets: [
                                    {
                                        id: 805,
                                        name: "Heading",
                                        type: "HEADING",
                                        text: "Borders",
                                        size: 1
                                    },
                                    {
                                        id: 806,
                                        name: "Paragraph",
                                        type: "PARAGRAPH",
                                        text: "This topic introduces the borders in css"
                                    },
                                    {
                                        id: 807,
                                        name: "Image",
                                        type: "IMAGE",
                                        src: "https://picsum.photos/200"
                                    }
                                ]
                            },
                            {
                                id: 604,
                                title: "Colors",
                                widgets: [
                                    {
                                        id: 809,
                                        name: "Heading",
                                        type: "HEADING",
                                        text: "Colors",
                                        size: 1
                                    },
                                    {
                                        id: 810,
                                        name: "Paragraph",
                                        type: "PARAGRAPH",
                                        text: "This topic introduces colors in CSS"
                                    },
                                    {
                                        id: 811,
                                        name: "Link",
                                        type: "LINK",
                                        href: "flatcolors.io",
                                        title: "www.flatcolors.io"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 303,
                        title: "Bootstrap",
                        topics: [
                            {
                                id: 605,
                                title: "Grids",
                                widgets: [ ]
                            },
                            {
                                id: 606,
                                title: "Carousels",
                                widgets: [ ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 234,
                title: "Week2",
                lessons: [
                    {
                        id: 304,
                        title: "Javascript",
                        topics: [
                            {
                                id: 607,
                                title: "Variables",
                                widgets: [ ]
                            },
                            {
                                id: 608,
                                title: "Callbacks",
                                widgets: [ ]
                            }
                        ]
                    },
                    {
                        id: 305,
                        title: "Jqueryupdated",
                        topics: [
                            {
                                id: 609,
                                title: "Events",
                                widgets: [ ]
                            }
                        ]
                    },
                    {
                        id: 4000,
                        title: "New Lesson",
                        topics: [
                            {
                                id: 838,
                                title: "New Topic",
                                widgets: [ ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 2000,
                title: "week3",
                lessons: [
                    {
                        id: 777,
                        title: "New Lesson",
                        topics: [
                            {
                                id: 888,
                                title: "New Topic",
                                widgets: [ ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

class CourseService{
	constructor(){
		this.courses = courses;
	}

	createCourse = course => {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
			credentials:"include",
            headers:{
                'Content-Type': 'application/json'
            },
            method:'POST'
        }).then(response => response.json());

    };



	findCourseById = courseId => {
		return fetch(COURSE_API_URL+courseId,{
			credentials:"include"
		})
            .then(response=>response.json());
	};

	findAllCourses = () => {
		 return fetch(COURSE_API_URL,{
		 	credentials:"include",
			 method:'get'
		 })
             .then(response => response.json());
	};


	deleteCourse = courseId =>
        fetch(COURSE_API_URL + courseId, {
            method: 'delete',
			credentials:"include",
            headers: {
                'content-type': 'application/json'   }
        }).then(response => response.json());


    updateCourse = (id, course) => {
		for(var i=0;i<this.courses.length;i++){
			if(this.courses[i] == id){
				this.courses[i] = course
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
							topics[l].widgets[0].top = true;
							topics[l].widgets[topics[l].widgets.length-1].down = true;
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

    updateWidget = (widgetId, newwidget) => {
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
                                    widget.id === widgetId ? newwidget : widget)
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
								for(var n=0;n<widgets.length;n++){
									widgets[n].top = false;
									widgets[n].down = false;
									if(n==0){
										widgets[n].top = true;
										widgets[n].down = false;

									}

									if(n==widgets.length-1){
										widgets[n].top=false
										widgets[n].down=true
									}
								}
								console.log(widgets);
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
								for(var n=0;n<widgets.length;n++){
									widgets[n].top = false;
									widgets[n].down = false;
									if(n==0){
										widgets[n].top = true
										widgets[n].down = false

									}

									if(n==widgets.length-1){
										widgets[n].top=false
										widgets[n].down=true
									}
								}
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