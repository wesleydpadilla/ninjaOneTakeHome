import React, { useEffect, useRef } from "react"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"

function SortByDropDown() {
  const sortValue = useSelector(state => state.sortAndFilter.sort)
  const { sortDevices, getSortValue } = useActions()
  const selectRef = useRef()

  useEffect(() => {
    getSortValue(selectRef.current.value)
  }, [])

  return (
    <div>
      <label htmlFor="sortBy">Sort by:</label>
      <select
        ref={selectRef}
        defaultValue
        name="sortBy"
        onChange={e => {
          getSortValue(e.target.value)
          sortDevices(sortValue)
        }}
      >
        <option label="System Name" value="hdd_capacity"></option>
        <option label="HDD Capacity" value="system_name"></option>
      </select>
    </div>
  )
}

export default SortByDropDown
