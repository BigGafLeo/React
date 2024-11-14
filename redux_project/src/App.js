import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { authActions } from "./store/auth-slice";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);

  return (
    <Fragment>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
