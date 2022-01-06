import { NavLink } from "react-router-dom";
import { activeStyle } from "../GenNav/GenNav";
import s from "components/AppBar/AuthNav/AuthNav.module.scss";

function AuthNav({ className }) {
  return (
    <>
      <div className={`${className} ${s.AuthNav}`}>
        <NavLink style={activeStyle} className={s.AuthNav} to="/signup">
          Sign up
        </NavLink>
        <NavLink style={activeStyle} className={s.AuthNav} to="/login">
          Login
        </NavLink>
      </div>
    </>
  );
}

export default AuthNav;
