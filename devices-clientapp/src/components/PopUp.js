import React, { useState } from "react"
import ReactDOM from "react-dom"
import "../styles/popUpStyle.scss"
import { v4 as uuid } from "uuid"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"

function PopUp({ setVisibility, visible }) {
  const [systemName, setSystemName] = useState("")
  const [hddCapacity, sethddCapacity] = useState(0)
  const [type, setType] = useState("WINDOWS_WORKSTATION")
  const [newDevice, setNewDevice] = useState({
    id: uuid(),
    system_name: systemName,
    type: type,
    hdd_capacity: hddCapacity
  })

  const { addDevices } = useActions()
  const sortValue = useSelector(state => state.sortAndFilter.sort)
  const { sortDevices } = useActions()

  visible
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll")

  const submitMe = () => {
    setNewDevice({
      id: uuid(),
      system_name: systemName,
      type: type,
      hdd_capacity: hddCapacity
    })
  }
  ///////////////////////////////////////////////////////////////////////////////
  return ReactDOM.createPortal(
    <div className="popUp">
      <div className="popUp__modal">
        <h2 className="popUp__header">Add Device</h2>
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              addDevices(newDevice).then(() => {
                sortDevices(sortValue)
              })
              setVisibility(!visible)
            }}
          >
            <label htmlFor="systemName">System Name</label>
            <input
              required
              type="text"
              name="systemName"
              id="systemName"
              autoComplete="off"
              value={systemName}
              onChange={e => setSystemName(e.target.value)}
            />
            <br />
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              onChange={e => setType(e.target.value)}
              value={type}
            >
              <option value="0" disabled defaultValue hidden>
                Select Type
              </option>
              <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
              <option value="WINDOWS_SERVER">Windows Server</option>
              <option value="MAC">Mac</option>
            </select>
            <br />
            <label htmlFor="hddCapacity">HDD Capacity (GB)</label>
            <input
              required
              type="number"
              name="hddCapacity"
              id="hddCapacity"
              value={hddCapacity}
              onChange={e => sethddCapacity(parseInt(e.target.value))}
            />
            <div className="popUp__buttonContainer">
              <button
                onClick={() => {
                  submitMe()
                }}
                className={"popUp__button popUp__button--submit"}
              >
                Save
              </button>
              <button
                onClick={() => setVisibility(!visible)}
                className={"popUp__button popUp__button--cancel"}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={
          visible
            ? "popUp--visible popUp__backDrop"
            : "PopUp--invisible popUp__backDrop"
        }
        onClick={() => {
          setVisibility(!visible)
        }}
      ></div>
    </div>,
    document.getElementById("popUp")
  )
}

export default PopUp
