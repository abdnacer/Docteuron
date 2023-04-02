import React from "react"

function Button(props) {
  return(
      <button type={props.type}  onClick={props.onclick} className={props.class}>{props.btn}</button>
  )
}

export default Button