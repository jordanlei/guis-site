import React, { Component } from 'react';
import "../css/style.css"

export default function Layout({children, style}) {
  return (
    <div className = "layout" style = {style}>
      {children}
    </div>
  )
}