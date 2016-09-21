const API = 'http://danielgeslin.com/api/?route=';

export function fetchMovies(){
  return fetch('http://danielgeslin.com/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

export function login(username, password){
  return fetch(API.concat('login'),{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password})
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });;
}
