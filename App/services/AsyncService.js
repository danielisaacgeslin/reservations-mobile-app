const API = 'http://danielgeslin.com/api/?route=';

export function serialize (data) {
  return Object.keys(data).map(function (keyName) {
      return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
  }).join('&');
};

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
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: serialize({username, password})
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });;
}

export function getReservationList(month, year){
  return fetch(API.concat('getReservationList&month=').concat(month).concat('&year=').concat(year))
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

export function getReservationTagList(reservationId){
  return fetch(API.concat('getReservationTagList&reservation_id=').concat(reservationId))
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

export function getComments(reservationId){
  return fetch(API.concat('getComments&reservation_id=').concat(reservationId))
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}
