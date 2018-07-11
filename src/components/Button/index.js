import React from "react";

const Button = props => (
  <button
    type="submit"
    className="btn rounded-0 theme font-weight-bold"
    onClick={props.onClick}
  >
    {props.name}
  </button>
);

export default Button;
