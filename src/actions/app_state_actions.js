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

function clearEdit(){
  return {
    type: "CLEAR_EDIT"
  }
}

export {
  changeZipcode,
  loadingApp,
  appLoaded,
  editingDetail,
  clearEdit
};
