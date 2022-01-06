import { logIn } from "store/auth/auth-operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "views/SignupView.module.scss";
import style from "views/LoginView.module.scss";
import Container from "components/Container/Container";

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={style.LoginView}>
      <Container>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className={style.LoginView__form}
        >
          <label className={s.SignupView__item}>
            E-mail
            <input
              className={s.SignupView__input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={s.SignupView__item}>
            Password
            <input
              className={s.SignupView__input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Log in</button>
        </form>
      </Container>
    </div>
  );
}

export default LoginView;
