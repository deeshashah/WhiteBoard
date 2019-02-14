

const COURSE_API_URL = 'http://localhost:8080/api/courses/';
const MODULES_API_URL = 'http://localhost:8080/api/modules/';


class ModuleService{
    findAllModules= (courseId) => {
        console.log(COURSE_API_URL+courseId+'/modules');
        return fetch(COURSE_API_URL+courseId+'/modules')
            .then(response => response.json());
    };

    findModuleById = (moduleId) => {
        return fetch(MODULES_API_URL+moduleId)
            .then(response => response.json());
    };

    createModule = (courseId, module) => {
        console.log(module.title);
        return fetch(COURSE_API_URL+courseId+"/modules", {
            body: JSON.stringify(module),
            headers:{
                'Content-Type': 'application/json'
            },
            method:'POST'
        }).then(response => response.json());

    };

    deleteModule = (deleteModule) => {
        fetch(MODULES_API_URL + deleteModule.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'   },
        });
    };

    updateModule = (updateModule) => {
        console.log(MODULES_API_URL+updateModule.id);
        return fetch(MODULES_API_URL+updateModule.id, {
            body:JSON.stringify(updateModule),
            method:'put',
            headers:{
                'content-type':'application/json'
            }
        }).then(response => response.json());
    };


}

export default ModuleService