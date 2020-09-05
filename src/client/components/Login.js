import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import className from "classnames";
import { loadLogin } from "../redux/actions";
import Icon from "../assets/lock-black-18dp.svg";
import loginStyles from "../Stylesheets/login.module.scss";
import commonStyles from "../Stylesheets/common.module.scss";
import placeholderStyles from "../stylesheets/inputPlaceholder.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const login = () => {
    const email = "admin@example.com";
    const password = "admin";
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
          <div className={commonStyles.inputBigArea}>
            <label className={placeholderStyles.labelInputPlaceholder}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="&nbsp;"
                required
                className={placeholderStyles.labelInputPlaceholder}
              />
              <span className={placeholderStyles.labelPlaceholder}>Email Address *</span>
            </label>
          </div>
          <div className={commonStyles.inputBigArea}>
            <label className={placeholderStyles.labelInputPlaceholder}>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="&nbsp;"
                required
                className={placeholderStyles.labelInputPlaceholder}
              />
              <span className={placeholderStyles.labelPlaceholder}>Password *</span>
            </label>
          </div>
          <div className={commonStyles.checkboxContainer}>
            <label>
              <input type="checkbox" name="remenber" id="remenber" className={commonStyles.checkboxInput} />
              <span className={commonStyles.checkboxParts}>remenber me</span>
            </label>
          </div>
          <div className={commonStyles.submitBtnArea}>
            <button className={commonStyles.submitBtn} onClick={() => login()}>
              Login
            </button>
          </div>
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
