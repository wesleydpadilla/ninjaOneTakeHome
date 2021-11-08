import React, { useState } from "react"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"

function SortByDropDown() {
  const sortValue = useSelector(state => state.sortAndFilter.sort)
  const { sortDevices } = useActions()
  const { getSortValue } = useActions()

  return (
    <div>
      <label htmlFor="sortBy">Sort by:</label>
      <select
        defaultValue
        name="sortBy"
        onChange={e => {
          getSortValue(e.target.value)
          sortDevices(sortValue)
          console.log(sortValue)
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
