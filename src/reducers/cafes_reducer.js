export default function(state = [], action){
  switch (action.type) {
    case 'LOADING':
      console.log("loading");
      let loading = Object.assign({}, loading: true);
      return state.concat(loading)
    case 'LOAD_CAFES':
      let cafes = Object.assign({}, cafes: action.payload);
      return state.concat(cafes)
    case 'MODIFY_CAFE':
      let cafe = Object.assign({}, action.payload);
      return state.concat(cafe)
    default:
      return state;
  }
}
