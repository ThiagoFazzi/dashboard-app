import {CHANGE_VALUE} from '../actions/sensors'

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
        return action.payload.sensors[0]

    default:
      return state
  }  
}