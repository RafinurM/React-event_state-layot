import React from "react";

function IconSwitch(props) {
    return (
        <div onClick={props.onSwitch} className="material-icons">{props.icon}</div>
    )
}

export default IconSwitch