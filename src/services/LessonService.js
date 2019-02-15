const MODULE_API_URL = 'https://whiteboard-webservice.herokuapp.com/api/module/';
const LESSON_API_URL = 'https://whiteboard-webservice.herokuapp.com/api/lesson/';

class LessonService{
    findAllLessons = (moduleId) => {
        console.log(MODULE_API_URL+moduleId+"/lesson");
        return fetch(MODULE_API_URL+moduleId+"/lesson",{
            credentials:"include",
            method:'get'
        })
            .then(response=>response.json())
    };

    createLesson = (moduleId, lesson) => {
        return fetch(MODULE_API_URL+moduleId+"/lesson", {
            body:JSON.stringify(lesson),
            credentials:"include",
            headers:{
                'Content-Type': 'application/json'
            },
            method:'POST'
        }).then(response=>response.json());
    };

    deleteLesson = (deleteLesson) => {
        console.log("delete:"+LESSON_API_URL+deleteLesson.id);
        return fetch(LESSON_API_URL+deleteLesson.id, {
            method: 'delete',
            credentials:"include",
            headers: {
                'content-type': 'application/json'   },
        })
    };

    findLessonById = (lessonId) => {

        return fetch(LESSON_API_URL+lessonId,{
            credentials:"include",
            method:'get'
        })
            .then(response=> response.json());
    };

    updateLesson = (lesson) => {
        return fetch(LESSON_API_URL+lesson.id,{
            body:JSON.stringify(lesson),
            credentials:"include",
            method:'put',
            headers:{
                'content-type':'application/json'
            },
        }).then(response => response.json());
    }

}

export default LessonService;