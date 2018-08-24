import fetch from 'isomorphic-fetch';

export default class ApiService {
    static getAllEvents(){
        return fetch('http://localhost:10010/events', {
            method: 'GET',
            body: {},
            redirect: 'follow',
            headers: new Headers({
              'Content-Type': 'application/json;charset=utf-8',
            }),
            credentials: 'same-origin',
          }).then(response => response.json().then(json => json));
    };
    static createEvent(value){
        return fetch('http://localhost:10010/events', {
            method: 'POST',
            body: JSON.stringify(value),
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            json: true,
            credentials: 'same-origin',
          }).then(response => response.json().then(json => json));
    };
}

