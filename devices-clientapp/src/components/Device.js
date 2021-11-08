import React, { useState } from "react"
import "../styles/deviceStyle.scss"
import UpdatePopUp from "./UpdatePopUp"
import { useActions } from "../hooks/useActions"

function Device({ device }) {
  const [updateVisible, setUpdateVisibility] = useState(false)
  const { deleteDevices } = useActions()
  /////////////////////////////////////////////////////////////////////////
  return (
    <>
      {updateVisible && (
        <UpdatePopUp
          setUpdateVisibility={setUpdateVisibility}
          updateVisible={updateVisible}
          device={device}
        />
      )}

      <div className="device">
        <div>
          <h2>{device.system_name}</h2>
          <p>{device.type}</p>
          <p>{`${device.hdd_capacity} GB`}</p>
        </div>
        <div className="device__buttonContainer">
          <button
            className="device__button device__button--update"
            onClick={() => setUpdateVisibility(!updateVisible)}
          >
            Update
          </button>
          <button
            className="device__button device__button--delete"
            onClick={() => deleteDevices(device)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  )
}

export default Device
