import React from "react"
import Device from "./Device"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"
import { useEffect } from "react"

import "../styles/dashboardStyle.scss"

function Dashboard() {
  const { fetchDevices } = useActions()
  const { sortDevices } = useActions()

  const devices = useSelector(state => state.devices.data)
  console.log(devices)

  useEffect(() => {
    fetchDevices().then(() => {
      sortDevices("system_name")
    })
  }, [])

  const renderDevices = () => {
    return devices.map(device => {
      return <Device key={device.id} device={device} />
    })
  }
  ///////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="dashboard">{renderDevices()}</div>
    </>
  )
}

export default Dashboard
