const MODULE_API_URL = 'http://localhost:8080/api/module/';
const LESSON_API_URL = 'http://localhost:8080/api/lesson/';

class LessonService{
    findAllLessons = (moduleId) => {
        console.log(MODULE_API_URL+moduleId+"/lesson");
        return fetch(MODULE_API_URL+moduleId+"/lesson")
            .then(response=>response.json())
    };

    createLesson = (moduleId, lesson) => {
        return fetch(MODULE_API_URL+moduleId+"/lesson", {
            body:JSON.stringify(lesson),
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
            headers: {
                'content-type': 'application/json'   },
        })
    };

    findLessonById = (lessonId) => {
        return fetch(LESSON_API_URL+lessonId)
            .then(response=>response.json());
    };

    updateLesson = (lesson) => {
        return fetch(LESSON_API_URL+lesson.id,{
            body:JSON.stringify(lesson),
            method:'put',
            headers:{
                'content-type':'application/json'
            },
        }).then(response => response.json());
    }

}

export default LessonService;