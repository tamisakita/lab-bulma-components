import React from 'react';
import "./Formfield.css";

const Formfield = (props) => {
  return (
    <div class="field">
      <label class="label">{props.label}</label>
      <div class="control">
        <input class="input" type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  )
}

export default Formfield;