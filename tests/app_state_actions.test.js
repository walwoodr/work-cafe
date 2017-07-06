import * as actions from '../src/actions/app_state_actions';

describe('app state actions', () => {
  it('should create an action to change the zip code', () => {
    const text = '80122'
    const expectedAction = {
      type: "CHANGE_ZIPCODE",
      payload: text
    }
    expect(actions.changeZipcode(text)).toEqual(expectedAction)
  })

  it('should create an action to change the state to loading', () => {
    const expectedAction = {
      type: "LOADING",
    }
    expect(actions.loadingApp()).toEqual(expectedAction)
  })

  it('should create an action to change the state to loaded', () => {
    const expectedAction = {
      type: "LOADED",
    }
    expect(actions.appLoaded()).toEqual(expectedAction)
  })

  it('should create an action to change the detail being edited', () => {
    const detail = 'coffeeTea'
    const expectedAction = {
      type: "EDITING",
      payload: detail
    }
    expect(actions.editingDetail('coffeeTea')).toEqual(expectedAction)
  })

  it('should create an action to change the component being viewed', () => {
    const component = 'search'
    const expectedAction = {
      type: "VIEWING",
      payload: component
    }
    expect(actions.viewingComponent('search')).toEqual(expectedAction)
  })
})
