import s from "components/AppBar/UserMenu/UserMenu.module.scss";
import { logOut } from "store/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserEmail } from "store/auth/auth-selectors";
import avatar from "images/default-user-pic.png";

function UserMenu({ className }) {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  return (
    <div className={className}>
      <span className={s.UserMenu__user}> Hello, {userEmail}</span>
      <img className={s.UserMenu__photo} alt="default avatar" src={avatar} />
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}

export default UserMenu;
