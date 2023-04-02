import React from "react";

function Input(props) {
  return(
    <div>
      <input checked={props.checked} type={props.type} value={props.value} className={props.class} id={props.id} onChange={props.onChange} placeholder={props.placeholder} name={props.name}  />
    </div>
  )
}

export default Input
