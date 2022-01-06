import { NavLink } from "react-router-dom";
import s from "components/AppBar/GenNav/GenNav.module.scss";

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#3e84be" : "#fff",
    textDecoration: "none",
  };
};

function GenNav({ className }) {
  return (
    <nav className={className}>
      <NavLink style={activeStyle} className={s.GenNav} to="/">
        Home
      </NavLink>
      <NavLink style={activeStyle} className={s.GenNav} to="/mycontacts">
        My Contacts
      </NavLink>
    </nav>
  );
}

export default GenNav;
