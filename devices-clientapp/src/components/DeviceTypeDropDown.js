import React, { useState } from "react"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"

function DeviceTypeDropDown() {
  const { filterDevices } = useActions()
  const { fetchDevices } = useActions()

  const sortValue = useSelector(state => state.sortAndFilter.sort)
  const { sortDevices } = useActions()

  return (
    <div>
      <label htmlFor="deviceType">Device Type:</label>
      <select
        name="deviceType"
        id="deviceType"
        onChange={e => {
          fetchDevices()
            .then(() => filterDevices(e.target.value))
            .then(() =>
              sortDevices(
                sortValue === "system_name" ? "hdd_capacity" : "system_name"
              )
            )
        }}
      >
        <option label="All" value="ALL"></option>
        <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
        <option value="WINDOWS_SERVER">Windows Server</option>
        <option value="MAC">Mac</option>
      </select>
    </div>
  )
}

export default DeviceTypeDropDown
