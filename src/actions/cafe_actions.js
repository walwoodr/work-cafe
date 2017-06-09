require('es6-promise').polyfill();
require('isomorphic-fetch');

function loadData(zipcode){
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`http://localhost:3001/cafes/${zipcode}`)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then((cafes) => dispatch({type: 'LOAD_CAFES', payload: cafes }))
  }
}

function sendCafeUpdate(cafeDetails){
  return (dispatch) => {
    fetch(`http://localhost:3001/cafes/${cafeDetails.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cafeDetails)
    })
      .then(function(response) {
        console.log(response)
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
  }
}

function modifyCafe(id, property, value){
  switch (property) {
    case 'genderNeutralRestrooms':
      return {
        type: "MODIFY_CAFE",
        payload: {id: id, property: {genderNeutralRestrooms: value}}
      }
    case 'outlets':
      return {
        type: "MODIFY_CAFE",
        payload: {id: id, property: {outlets: value}}
      }
    case 'coffeeQuality':
      return {
        type: "MODIFY_CAFE",
        payload: {id: id, property: {coffeeQuality: value}}
      }
    case 'teaQuality':
      return {
        type: "MODIFY_CAFE",
        payload: {id: id, property: {teaQuality: value}}
      }
    case 'food':
     return {
       type: "MODIFY_CAFE",
       payload: {id: id, property: {food: value}}
     }
    case 'vibe':
     return {
       type: "MODIFY_CAFE",
       payload: {id: id, property: {vibe: value}}
     }
     default:
     return {}
    }
}

export {
  loadData,
  modifyCafe,
  sendCafeUpdate
};
