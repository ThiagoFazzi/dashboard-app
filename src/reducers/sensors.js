import {CHANGE_VALUE} from '../actions/sensors'

export default (state = [], action) => {
  switch (action.type) {
    case CHANGE_VALUE:
    //console.log(action.payload.sensors)
     console.log(...state) 
        return(state,  action.payload.sensors)

    default:
      return state
  }  
}