import React from "react";
import { useDispatch } from "react-redux";
import className from "classnames";
import { loadLogin } from "../redux/actions";
import styles from "../stylesheets/styles.module.scss";
fetch("/login", { method: "post" }).then((response) => {
  console.log(response.json());
});
const Login = () => {
  const dispatch = useDispatch();
  const login = () => {
    const email = "admin@example.com";
    const password = "admin";
    dispatch(loadLogin({ email, password }));
  };
  return (
    <div className={styles.test}>
      <button className={"submit-btn"} onClick={() => login()}>
        Login
      </button>
    </div>
  );
};

export default Login;
