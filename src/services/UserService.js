const USER_API_URL = 'https://whiteboard-webservice.herokuapp.com/api/';

class UserService{
    register = (user) => {
        return fetch(USER_API_URL+"register", {
            body:JSON.stringify(user),
            method:'post',
            credentials:"include",
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>response.json()).catch(error => { console.log('request failed', error); });
    };

    login = (user) => {
        return fetch(USER_API_URL+"login", {
            body:JSON.stringify(user),
            method:'post',
            credentials:"include",
            headers:{
                'Content-type':'application/json'
            }
        }).then(response=>response.json()).catch(error => { console.log('request failed', error); });;
    };

    profile = () => {
        return fetch(USER_API_URL+"profile",{
            method:'get',
            credentials:"include"
        })
            .then(response =>
                    response.json()

            ).catch(error => { console.log('request failed', error); });
    };

    update = (user) => {
        return fetch(USER_API_URL+"user/"+user.username,{
            body:JSON.stringify(user),
            credentials:"include",
            method:'put',
            headers:{
                'Content-type':'application/json'
            }
        }).then(response => response.json());
    };

    logout = () => {
        fetch(USER_API_URL+"logout",{
            method:"post",
            credentials:"include"
        });
    }
}

export default UserService;