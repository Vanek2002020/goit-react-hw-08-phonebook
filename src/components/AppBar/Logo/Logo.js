import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className={s.Logo}>
      <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/">
        <BsFillTelephoneFill className={s.Logo__icon} />
        <span>MyPhonebook</span>
      </NavLink>
    </div>
  );
}

export default Logo;
