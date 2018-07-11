import React from "react";

const Input = props => (
  <input
    type="text"
    value={props.value}
    onChange={props.onChange}
    className="form-control rounded-0"
  />
);

export default Input;
