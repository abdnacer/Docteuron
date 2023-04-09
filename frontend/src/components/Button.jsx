import React from "react"

function Button(props) {
  return(
      <button type={props.type} value={props.value} style={props.style}  onClick={props.onclick} className={props.class}>{props.btn}</button>
  )
}

export default Button