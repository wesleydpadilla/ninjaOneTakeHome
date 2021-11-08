import { combineReducers } from "redux"
import { devicesReducer } from "./devicesReducer"

const reducers = combineReducers({
  devices: devicesReducer,
})

export default reducers
