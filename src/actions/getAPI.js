require('es6-promise').polyfill();
require('isomorphic-fetch');

const fetchAPI = function(zipcode){
  fetch(`http://localhost:3001/cafes/${zipcode}`)
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then(function(cafes) {
          console.log(cafes);
      });
}

export default fetchAPI;
