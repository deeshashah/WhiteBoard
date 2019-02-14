const TOPIC_API_URL = 'http://localhost:8080/api/topic/';
const LESSON_API_URL ='http://localhost:8080/api/lesson/';

class TopicService{

    findAllTopics = (lessonId) => {
        console.log("What it is finding" + LESSON_API_URL+lessonId+"/lesson");
        return fetch(LESSON_API_URL+lessonId+"/topic")
            .then(response=>response.json())
    };

    createTopic = (lessonId, topic) => {
        return fetch(LESSON_API_URL+lessonId+"/topic",{
            body:JSON.stringify(topic),
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
        }).then(response=> response.json());
    };

    deleteTopic = (deleteTopic) =>{
        return fetch(TOPIC_API_URL+deleteTopic.id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'   },
        })
    }

    updateTopic = (topic) => {
        return fetch(TOPIC_API_URL+topic.id, {
            body:JSON.stringify(topic),
            method:'put',
            headers:{
                'content-type':'application/json'
            }
        }).then(response=>response.json());
    }



}

export default TopicService;