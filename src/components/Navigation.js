import React from "react";
import "../styles/variables.css";
import "../styles/Navigation.css";
import "../styles/fontello.css";
import { NavLink } from "react-router-dom";

const icons = [
  { icon: "icon-home-outline", path: "/", exact: true },
  { icon: "icon-user-outline", path: "/about" },
  { icon: "icon-briefcase", path: "/projects" },
  { icon: "icon-mail", path: "/contact" }
];

const Navigation = () => {
  const menu = icons.map(icon => (
    <li key={icon.icon}>
      <NavLink to={icon.path} exact={icon.exact ? icon.exact : false}>
        <i className={icon.icon} />
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
