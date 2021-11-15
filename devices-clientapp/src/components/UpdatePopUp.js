import React, { useState } from "react"
import ReactDOM from "react-dom"
import "../styles/updatePopUpStyle.scss"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"

function UpdatePopUp({ updateVisible, setUpdateVisibility, device }) {
  const [systemName, setSystemName] = useState(device.system_name)
  const [hddCapacity, sethddCapacity] = useState(+device.hdd_capacity)
  const [type, setType] = useState(device.type)
  const [updatedDevice, setUpdatedDevice] = useState({
    id: device.id,
    system_name: systemName,
    type,
    hdd_capacity: hddCapacity
  })
  const { updateDevices, sortDevices } = useActions()
  const sortValue = useSelector(state => state.sortAndFilter.sort)

  const normailizeText = () => {
    return device.type
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
      .replace(/_/g, " ")
  }
  const submitMe = () => {
    setUpdatedDevice({
      id: device.id,
      system_name: systemName,
      type,
      hdd_capacity: hddCapacity
    })
  }
  /////////////////////////////////////////////////////////////////////////////////
  return ReactDOM.createPortal(
    <div className="updatePopUp">
      <div className="updatePopUp__modal">
        <h2 className="updatePopUp__header">Update Device</h2>
        <div>
          <form
            onSubmit={() => {
              updateDevices(device, updatedDevice).then(() => {
                sortDevices(
                  sortValue === "system_name" ? "hdd_capacity" : "system_name"
                )
              })
              setUpdateVisibility(false)
            }}
          >
            <label htmlFor="systemName">System Name</label>
            <input
              type="text"
              name="systemName"
              id="systemName"
              value={systemName}
              onChange={e => setSystemName(e.target.value)}
              autoComplete="off"
            />
            <br />
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              onChange={e => setType(e.target.value)}
              value={type}
            >
              <option value={device.type} defaultValue hidden>
                {normailizeText()}
              </option>
              <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
              <option value="WINDOWS_SERVER">Windows Server</option>
              <option value="MAC">Mac</option>
            </select>
            <br />
            <label htmlFor="hddCapacity">HDD Capacity (GB)</label>
            <input
              type="number"
              name="hddCapacity"
              id="hddCapacity"
              value={+hddCapacity}
              onChange={e => sethddCapacity(parseInt(e.target.value))}
            />
            <div className="updatePopUp__buttonContainer">
              <button
                className={"updatePopUp__button updatePopUp__button--submit"}
                onClick={() => {
                  submitMe()
                }}
              >
                Save
              </button>
              <button
                onClick={() => setUpdateVisibility(false)}
                className={"updatePopUp__button updatePopUp__button--cancel"}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={
          updateVisible
            ? "updatePopUp--visible updatePopUp__backDrop"
            : "updatePopUp--invisible updatePopUp__backDrop"
        }
        onClick={() => {
          setUpdateVisibility(!updateVisible)
        }}
      ></div>
    </div>,
    document.getElementById("popUp")
  )
}

export default UpdatePopUp
