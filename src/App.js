import "./App.scss";
import React from "react";
import { Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import AppBar from "components/AppBar/AppBar";
import { fetchCurrentUser } from "store/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  RequireAuth,
  GeneralAccess,
} from "components/AppBar/UserMenu/CheckAccess";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { isFetchingUser, checkToken } from "store/auth/auth-selectors";
// import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

const HomeView = lazy(() =>
  import("views/HomeView" /*webpackChunkName: "home-view" */)
);
const LoginView = lazy(() =>
  import("views/LoginView" /*webpackChunkName: "login-view" */)
);
const ContactsView = lazy(() =>
  import("views/ContactsView" /*webpackChunkName: "contacts-view" */)
);
const SignupView = lazy(() =>
  import("views/SignupView" /*webpackChunkName: "signup-view" */)
);

const override = css`
  display: block;
  margin: auto;
`;

function App() {
  const dispatch = useDispatch();
  const userLoading = useSelector(isFetchingUser);
  const getToken = useSelector(checkToken);

  useEffect(() => {
    if (getToken === null) {
      return;
    } else {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  return (
    <>
      {!userLoading && (
        <>
          <AppBar />
          <Suspense fallback={<ClipLoader css={override} size={200} />}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route
                path="/mycontacts"
                element={
                  <RequireAuth redirectTo="/login">
                    <ContactsView />
                  </RequireAuth>
                }
              />
              <Route
                path="/signup"
                element={
                  <GeneralAccess redirectTo="/">
                    <SignupView />
                  </GeneralAccess>
                }
              />
              <Route
                path="/login"
                element={
                  <GeneralAccess redirectTo="/">
                    <LoginView />
                  </GeneralAccess>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
