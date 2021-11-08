const initialState = {
  filter: "ALL",
  sort: "hdd_capacity"
}

export const sortAndFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SORT":
      return { ...state, sort: action.payload }

    case "GET_FILTER":
      return { ...state, ...state.filter[action.payload] }

    default:
      return state
  }
}
