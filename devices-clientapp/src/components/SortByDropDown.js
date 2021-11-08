import React from "react"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"

function SortByDropDown() {
  const sortValue = useSelector(state => state.sortAndFilter.sort)
  const { sortDevices } = useActions()
  const { getSortValue } = useActions()
  console.log(sortValue)

  return (
    <div>
      <label htmlFor="sortBy">Sort by:</label>
      <select
        defaultValue
        name="sortBy"
        onChange={e => {
          getSortValue(e.target.value)
          sortDevices(sortValue)
        }}
      >
        <option
          label={sortValue === "hdd_capacity" ? "System Name" : "HDD Capacity"}
          hidden
        ></option>
        <option
          label={sortValue === "System Name" ? "HDD Capacity" : "System Name"}
          value={"hdd_capacity"}
        ></option>
        <option
          label="HDD Capacity"
          value={sortValue === "hdd_capacity" ? "system_name" : "hdd_capacity"}
        ></option>
      </select>
    </div>
  )
}

export default SortByDropDown
