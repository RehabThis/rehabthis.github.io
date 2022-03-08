import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Fortigate from "./components/Fortigate"
import FortigateWhitelistToolFQDN from "./components/FortigateWhitelistToolFQDN"
import FortigateFWRule from "./components/FortigateFWRule"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/vendor/fortigate" element={<Fortigate />} />
        <Route exact path="/vendor/fortigate/whitelist-tool/" element={<FortigateWhitelistToolFQDN />} />
        <Route exact path="/vendor/fortigate/fw-rule-gen/" element={<FortigateFWRule />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
