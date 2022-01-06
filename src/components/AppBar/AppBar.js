import s from "components/AppBar/AppBar.module.scss";
import AuthNav from "./AuthNav/AuthNav";
import GenNav from "./GenNav/GenNav";
import UserMenu from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getUserEmail } from "store/auth/auth-selectors";
import { getLoggedIn } from "store/auth/auth-selectors";
import Logo from "./Logo/Logo";

function AppBar() {
  const isLoggedIn = useSelector(getLoggedIn);

  const userEmail = useSelector(getUserEmail);

  return (
    <header className={s.AppBar}>
      <Logo />
      <GenNav className={s.AppBar__item} />
      {isLoggedIn && userEmail !== undefined ? (
        <UserMenu className={s.AppBar__item} />
      ) : (
        <AuthNav className={s.AppBar__item} />
      )}
    </header>
  );
}

export default AppBar;
