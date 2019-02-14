import courses from './courses.json'

const COURSE_API_URL = 'http://localhost:8080/api/courses/';

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