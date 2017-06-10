export default function(state = {zipcode: '', loading: false, editing: '', viewingComponent: ''}, action) {
  switch (action.type) {
    case 'CHANGE_ZIPCODE':
      let newZip = Object.assign({}, state, {zipcode: action.payload})
      return newZip
    case 'LOADING':
      let loading = Object.assign({}, state, {loading: true})
      return loading;
    case 'LOAD_CAFES':
      let apiLoaded = Object.assign({}, state, {zipcode: '', loading: false});
      return apiLoaded;
    case 'LOADED':
      let loaded = Object.assign({}, state, {loading: false})
      return loaded;
    case 'EDITING':
      let editing = Object.assign({}, state, {editing: action.payload})
      return editing;
    case 'VIEWING':
      let viewingComponent = Object.assign({}, state, {viewingComponent: action.payload})
      return viewingComponent;
    default:
      return state;
  }
}
