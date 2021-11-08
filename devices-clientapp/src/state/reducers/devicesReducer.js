const initialState = { error: null, data: [] }

export const devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DEVICES":
      return { error: null, data: [] }
    case "FETCH_DEVICES_SUCCESS":
      return {
        error: null,
        data: action.payload.map(device => {
          return { ...device, hdd_capacity: parseInt(device.hdd_capacity) }
        })
      }
    case "FETCH_DEVICES_ERROR":
      return { error: action.payload, data: [] }
    case "UPDATE_SUCCESS":
      return {
        error: null,
        data: state.data.map(device =>
          device.id === action.payload.id
            ? { ...action.payload.updatedDevice }
            : device
        )
      }
    case "UPDATE_FAIL":
      return { error: action.payload, data: state.data }
    case "DELETE_SUCCESS":
      return {
        error: null,
        data: state.data.filter(device => device.id !== action.payload.id)
      }
    case "DELETE_FAIL":
      return { error: action.payload, data: state.data }
    case "POST_SUCCESS":
      return { error: null, data: [...state.data, action.payload] }
    case "POST_FAIL":
      return { error: action.payload, data: state.data }
    case "ORDER_DEVICES":
      return {
        ...state,
        data: [...state.data].sort((a, b) => {
          return typeof a[action.payload] === "string"
            ? a[action.payload].localeCompare(b[action.payload])
            : a[action.payload] - b[action.payload]
        })
      }
    // case "RESET_BEFORE_FILTER":
    //   return { ...state, data: action.payload }

    case "FILTER_DEVICES":
      return {
        ...state,
        data: [...state.data].filter(device => {
          return device.type === action.payload
        })
      }

    default:
      return state
  }
}
