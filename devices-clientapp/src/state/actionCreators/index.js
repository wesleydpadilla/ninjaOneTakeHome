import axios from "axios"

//"FETCH_DEVICES_SUCCESS" "FETCH_DEVICES" "FETCH_DEVICES_ERROR"
const URL = "http://localhost:3000/devices"

export const fetchDevices = () => {
  return async dispatch => {
    dispatch({
      type: "FETCH_DEVICES"
    })

    try {
      const { data } = await axios.get(URL)

      dispatch({
        type: "FETCH_DEVICES_SUCCESS",
        payload: data
      })
    } catch (err) {
      dispatch({
        type: "FETCH_DEVICES_ERROR",
        payload: err.message
      })
    }
  }
}

export const updateDevices = (device, updatedDevice) => {
  return async dispatch => {
    dispatch({
      type: "UPDATE",
      payload: device
    })
    try {
      const response = await axios.put(`${URL}/${device.id}`, updatedDevice)
      dispatch({
        type: "UPDATE_SUCCESS",
        payload: { id: device.id, updatedDevice }
      })
    } catch (err) {
      dispatch({
        type: "UPDATE_FAIL",
        payload: err.message
      })
    }
  }
}

export const deleteDevices = device => {
  return async dispatch => {
    try {
      const response = await axios.delete(`${URL}/${device.id}`)
      dispatch({
        type: "DELETE_SUCCESS",
        payload: { id: device.id }
      })
    } catch (err) {
      dispatch({
        type: "DELETE_FAIL",
        payload: err.message
      })
    }
  }
}

export const addDevices = newDevice => {
  return async dispatch => {
    try {
      const response = await axios.post(URL, newDevice)
      dispatch({
        type: "POST_SUCCESS",
        payload: newDevice
      })
    } catch (err) {
      dispatch({
        type: "POST_FAIL",
        payload: err.message
      })
    }
  }
}

export const sortDevices = sortBy => {
  return dispatch => {
    dispatch({ type: "ORDER_DEVICES", payload: sortBy })
  }
}

export const filterDevices = filterBy => {
  return dispatch => {
    dispatch({ type: "FILTER_DEVICES", payload: filterBy })
  }
}

export const getSortValue = sortValue => {
  return dispatch => {
    dispatch({ type: "GET_SORT", payload: sortValue})
  }
}

export const getFilterValue = filterValue => {
  return dispatch => {
    dispatch({ type: "GET_FILTER", payload: filterValue})
  }
}