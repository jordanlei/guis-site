import React, { Component } from 'react';
import "../css/style.css"
import Menu from "../components/menu";

export default function Layout({children, style}) {
  return (
    <div style = {style}>
      <Menu/>
      {children}
    </div>
  )
}