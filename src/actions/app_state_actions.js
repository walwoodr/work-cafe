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

export {
  changeZipcode,
  loadingApp,
  appLoaded
};
