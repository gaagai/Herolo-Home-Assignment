const INITIAL_STATE_SELECTED = {
  LocalizedName: 'Loading',
  backPic: { pic: '' },
}

export function cityReducer(state = INITIAL_STATE_SELECTED, action) {
  switch (action.type) {
    case 'SELECTED_CITY':
      let city = { ...action.payload }
      return city
    default:
      return state
  }
}
