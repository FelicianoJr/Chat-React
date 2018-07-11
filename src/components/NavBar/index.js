import React from "react";
import * as Icon from "react-feather";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm theme justify-content-center ">
      <span className="navbar-text font-weight-bold mr-3">
        <Icon.MessageCircle size={15} /> 24 online Requests
      </span>
      <span className="navbar-text font-weight-bold offline">
        <Icon.Mail size={15} /> 5 Offline Requests
      </span>
    </nav>
  );
};

export default NavBar;
