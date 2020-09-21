import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadLogin } from "../redux/actions";
import Icon from "../assets/lock-black-18dp.svg";
import loginStyles from "../Stylesheets/login.module.scss";
import commonStyles from "../Stylesheets/common.module.scss";
import BigInput from "../components/BigInput";
import SubmitButton from "../components/SubmitButton";

/**
 * ログインページ
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswoord] = useState("");
  const dispatch = useDispatch();
  const login = () => {
    dispatch(loadLogin({ email, password }));
  };
  return (
    <div className={commonStyles.mainContainer}>
      <div className={commonStyles.contentsContainer}>
        <div className={commonStyles.titleContainer}>
          <div className={commonStyles.textAlignCenter}>
            <div className={commonStyles.logoCircleArea}>
              <img className={`${loginStyles.loginLogo} ${commonStyles.noSelect} ${commonStyles.white}`} src={Icon} />
            </div>
          </div>
          <h3 className={commonStyles.textAlignCenter}>Login</h3>
        </div>
        <div className={commonStyles.formContainer}>
          <BigInput type="text" name="email" value={email} setValue={setEmail} displayName="Email Address *" />
          <BigInput type="password" name="password" value={password} setValue={setPasswoord} displayName="Password *" />
          <div className={commonStyles.checkboxContainer}>
            <label>
              <input type="checkbox" name="remenber" id="remenber" className={commonStyles.checkboxInput} />
              <span className={commonStyles.checkboxParts}>remenber me</span>
            </label>
          </div>
          <SubmitButton displayName="Login" submit={login} />
          <div className={loginStyles.linkLoginContainer}>
            <div>
              <a href="/forgot">パスワードを忘れた?</a>
            </div>
            <div>
              <Link to="/signup">アカウント作成</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
