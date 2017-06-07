function changeZipcode(newzip){
  return {
    type: "CHANGE_ZIPCODE",
    payload: newzip
  }
}

function loadingApp(){
  return {
    type: "LOADING"
  }
}

function appLoaded(){
  return {
    type: "LOADED"
  }
}

function editingDetail(element){
  return {
    type: "EDITING",
    payload: element
  }
}

export {
  changeZipcode,
  loadingApp,
  appLoaded,
  editingDetail
};
