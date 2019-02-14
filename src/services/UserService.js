const USER_API_URL = 'http://localhost:8080/api/';

class UserService{
    register = (user) => {
        return fetch(USER_API_URL+"register", {
            body:JSON.stringify(user),
            method:'post',
            credentials:"include",
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>response.json()).catch(error => { console.log('request failed', error); });;
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

    logout = () => {
        fetch(USER_API_URL+"logout",{
            method:"post",
            credentials:"include"
        });
    }
}

export default UserService;