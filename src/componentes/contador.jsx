import React from "react";
import  "./contador.css";

export default function Contador({ numClicks }){
    return(
      <div className="contador">{numClicks}</div>
    );
}