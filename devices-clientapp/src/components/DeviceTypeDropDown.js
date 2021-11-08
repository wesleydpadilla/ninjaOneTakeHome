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
            .then(() => sortDevices(sortValue))
        }}
      >
        <option label="All" value="ALL"></option>
        <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
        <option value="WINDOWS_SERVER">Windows Server</option>
        <option value="MAC">Mac</option>
      </select>
    </div>
    // <div>
    //   <p>Device Type:</p>
    //   <form name="deviceType" id="deviceType" multiple>
    //     <label htmlFor="ALL">ALL</label>
    //     <input type="checkbox" value="ALL" id="ALL" />
    //     <label htmlFor="WINDOWS_WORKSTATION">Windows Workstation</label>
    //     <input
    //       type="checkbox"
    //       value="WINDOWS_WORKSTATION"
    //       id="WINDOWS_WORKSTATION"
    //     />
    //     <label htmlFor="WINDOWS_SERVER">Windows Server</label>
    //     <input type="checkbox" value="WINDOWS_SERVER" id="WINDOWS_SERVER" />
    //     <label htmlFor="MAC">Mac</label>
    //     <input type="checkbox" value="MAC" id="MAC" />
    //   </form>
    // </div>
  )
}

export default DeviceTypeDropDown
