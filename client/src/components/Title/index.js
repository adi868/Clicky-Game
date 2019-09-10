import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-align">
            <img src="/images/squirtle.png" id="ash" alt="Ash Ketchum" data-toggle="popover" data-placement="top" data-content="Hey Poke-Trainer! Try and Catch Them All (But Don't Do It Twice!)" />
            <span id="hover">Hey There!</span>
        </div>
        {props.children}
    </div>
  )
  }
export default Title;
