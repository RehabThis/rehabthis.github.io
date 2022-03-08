import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function Fortigate() {
  return (
    <>
      <div className="appContainer">
        <div classNam="row">
          <div id="logoCol">
            <logo className="logo-main">
              <h1 className="appTitle">ToolShed</h1>
              <p className="subTitle">Current Tool Shed: Fortigate</p>
            </logo>
          </div>
          <br />
          <div id="navCol" className="fortiCol">
            <ul className="navUL">
              <Button className="navLinks" variant="info">
                <Link to="/vendor/fortigate/whitelist-tool/">
                  <li>Whitelist</li>
                </Link>
              </Button>
              <Button className="navLinks" variant="info">
                <Link to="/vendor/fortigate/fw-rule-gen/">
                  <li>FW Rule</li>
                </Link>
              </Button>
              <Button className="navLinks" variant="info">
                <li>Route Map</li>
              </Button>
              <Button className="navLinks" variant="info">
                <li>Static Route</li>
              </Button>
            </ul>
            <ul className="navUL">
              <Button className="navLinks" variant="info">
                <li>VPN</li>
              </Button>
              <Button className="navLinks" variant="info">
                <li>IP Objects</li>
              </Button>
              <Button className="navLinks" variant="info">
                <li>BGP Peer</li>
              </Button>
              <Button className="navLinks" variant="info">
                <li>VDOM</li>
              </Button>
            </ul>
          </div>
        </div>
        <div>
          <Link to="/">
            <Button className="navLinks" variant="info">
              <li>Back</li>
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Fortigate
