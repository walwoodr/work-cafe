export default function(state = [], action){
  switch (action.type) {
    case 'LOAD_CAFES':
      console.log("load cafes reducer");
      let cafes = action.payload;
      return state.concat(cafes)
    case 'MODIFY_CAFE':
      // TODO: this needs to be fixed. It almost certainly doesn't work. 
      let cafe = Object.assign({}, action.payload);
      return state.concat(cafe)
    default:
      return state;
  }
}
