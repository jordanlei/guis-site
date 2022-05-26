import React, { Component } from 'react';
import "../css/style.css"
import Menu from "../components/menu";

export default function Layout({children, style}) {
  return (
    <section id = "about">
    <div className = "section" style = {style}>
    <h1>ABOUT</h1>
    <p>
    <i>Have you ever wondered what your advisor struggled with as a graduate student? 
    What they struggle with now? </i>
    Growing up in Science is a conversation series 
    featuring personal narratives of becoming and being a scientist.
    <br/><br/>
    Growing up in Science was started in 2014 at New York University by 
    professors Wei Ji Ma and Cristina Alberini, and is now worldwide. 
    This article describes the origin and impact of the series. 
    At a typical Growing up in Science event, one faculty member 
    shares their life story, with a focus on struggles, failures, doubts, 
    detours, and weaknesses. Common topics include dealing with expectations, 
    impostor syndrome, procrastination, luck, rejection, conflicts with advisors, 
    and work-life balance, but these topics are always embedded in the speaker's broader narrative.
    <br/><br/>
    Join us for a conversation about the human factors that are 
    universal undercurrents of working in academia but that 
    too often remain unspoken.
    </p>
    </div>
    </section>
  )
}