import React, { useState } from "react"
import { Provider } from "react-redux"
import { store } from "../src/state"
import Dashboard from "./components/Dashboard"
import PopUp from "./components/PopUp"
import SortByDropDown from "./components/SortByDropDown"
import DeviceTypeDropDown from "./components/DeviceTypeDropDown"
import "./styles/appStyle.scss"

function App() {
  const [visible, setVisibility] = useState(false)
  ///////////////////////////////////////////////////////////////////////////
  return (
    <Provider store={store}>
      {visible && <PopUp setVisibility={setVisibility} visible={visible} />}
      <div className="app">
        <Dashboard />
        <div className="app__modifiers">
          <div style={{ display: "flex" }}>
            <DeviceTypeDropDown />
            <SortByDropDown />
          </div>
          <button
            onClick={() => setVisibility(true)}
            className="app__newDeviceBtn"
          >
            New Device
          </button>
        </div>
      </div>
    </Provider>
  )
}

export default App
