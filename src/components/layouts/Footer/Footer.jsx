import React from "react"
import { Outlet } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <Outlet />
      <h1>This is the footer</h1>
    </div>
  )
}

export default Footer