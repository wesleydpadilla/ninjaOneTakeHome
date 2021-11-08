import { combineReducers } from "redux"
import { devicesReducer } from "./devicesReducer"
import {sortAndFilterReducer} from "./sortsAndFiltersReducer"

const reducers = combineReducers({
  devices: devicesReducer,
  sortAndFilter: sortAndFilterReducer
})

export default reducers
