const initialState = {
  filter: "ALL",
  sort: ""
}

export const sortAndFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SORT":
      return { ...state, sort: action.payload }

    case "GET_FILTER":
      return { ...state, filter: action.payload }

    default:
      return state
  }
}
