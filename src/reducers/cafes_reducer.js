export default function(state = [], action){
  switch (action.type) {
    case 'LOAD_CAFES':
      let cafes = action.payload;
      return state.concat(cafes)
    case 'MODIFY_CAFE':
      let cafe = state.find((cafe) => {return cafe.id === action.payload.id})
      let idx = state.indexOf(cafe)
      let newCafe = Object.assign({}, cafe, action.payload.property);
      return [].concat(state.slice(0,idx), newCafe, state.slice(idx+1, state.length))
    default:
      return state;
  }
}
