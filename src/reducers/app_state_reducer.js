export default function(state = {zipcode: '', loading: false}, action) {
  switch (action.type) {
    case "CHANGE_ZIPCODE":
      let newZip = Object.assign({}, state, {zipcode: action.payload})
      return newZip
    case "LOADING":
      let loading = Object.assign({}, state, {loading: true})
      return loading;
    case "LOADED":
      let loaded = Object.assign({}, state, {loading: false})
      return loaded;
    default:
      return state;
  }
}
