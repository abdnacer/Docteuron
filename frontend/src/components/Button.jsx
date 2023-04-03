import React from "react"

function Button(props) {
  return(
      <button type={props.type} value={props.value}  onClick={props.onclick} className={props.class}>{props.btn}</button>
  )
}

export default Button