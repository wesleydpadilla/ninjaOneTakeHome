import React, { useState } from "react"
import { useActions } from "../hooks/useActions"

function SortByDropDown() {
  const { sortDevices } = useActions()
  const [sortBy, setSortBy] = useState("hdd_capacity")

  return (
    <div>
      <label htmlFor="sortBy">Sort by:</label>
      <select
        defaultValue
        name="sortBy"
        onChange={e => {
          setSortBy(e.target.value)
          sortDevices(sortBy)
        }}
      >
        <option label="Select One" disabled value="0"></option>
        <option label="System Name" value="hdd_capacity"></option>
        <option label="HDD Capacity" value="system_name"></option>
      </select>
    </div>
  )
}

export default SortByDropDown
