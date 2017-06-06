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

function modifyCafe(newCafeHash){
  return {
    type: "MODIFY_CAFE",
    payload: newCafeHash
  }
}

export { loadData, modifyCafe };