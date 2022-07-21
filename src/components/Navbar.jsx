import React from 'react'
import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"

export default function () {
  return (
    <div className ="navbar">
        <img src={logo} alt="logo-ironhack"/>
        <img src={menu} alt="logo-ironhack"/>
    </div>
  )
}
