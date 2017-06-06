function changeZipcode(newzip){
  console.log("changing zip code to");
  console.log(newzip);
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
