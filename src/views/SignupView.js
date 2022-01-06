import { signUp } from "store/auth/auth-operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "views/SignupView.module.scss";
import Container from "components/Container/Container";

function SignupView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(signUp({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.SignupView}>
      <Container additionalClass={s.SignupView__container}>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className={s.SignupView__form}
        >
          <label className={s.SignupView__item}>
            Name
            <input
              className={s.SignupView__input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

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

          <button type="submit">Sign up</button>
        </form>
      </Container>
    </div>
  );
}

export default SignupView;
