import React from "react";
import "../styles/Logo.css";
import { Link } from "react-router-dom";
const Logo = props => {
  let classForLogo = "firstLoad";

  if (props.location.pathname === "/" && props.firstLoad === true) {
    props.notFirstLoad();
    classForLogo = "firstLoad";
  } else if (props.location.pathname === "/" && props.firstLoad === false) {
    classForLogo = "notFirstLoad";
  } else {
    props.notFirstLoad();
    classForLogo = "corner";
  }

  return (
    <div className="logo">
      <Link
        to={props.location.pathname !== "/" ? "/" : ""}
        style={props.location.pathname === "/" ? { cursor: "default" } : undefined}>
        <h3 className={"logo " + classForLogo}>FL</h3>
      </Link>
    </div>
  );
};

export default Logo;
