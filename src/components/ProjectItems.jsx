import React from "react";

function ProjectItems(props){

    return <div>
   
    <div className="container box">
    <a href={props.link}>
    <img src={props.img}alt="pudcast"></img>
    </a>
    <div className="text-block">
    <h4>{props.title}</h4>
    <p>{props.info}</p>
  </div>

        
    </div>

        
    </div>
}

export default ProjectItems;