export default function(state = [], action){
  switch (action.type) {
    case 'MODIFY_CAFE':
      let cafe = Object.assign({}, action.payload);
      return state.concat(cafe)
    default:
      return state;
  }
}
