import React from "react";
import { Link } from "react-router-dom";
import className from "classnames";
import Icon from "../assets/create-signup.svg";
import commonStyles from "../Stylesheets/common.module.scss";
import signupStyles from "../Stylesheets/signup.module.scss";
import placeholderStyles from "../stylesheets/inputPlaceholder.module.scss";

const Signup = () => {
  return (
    <div className={commonStyles.mainContainer}>
      <div className={commonStyles.contentsContainer}>
        <div className={commonStyles.titleContainer}>
          <div className={commonStyles.textAlignCenter}>
            <div className={commonStyles.logoCircleArea}>
              <img className={`${commonStyles.noSelect} ${commonStyles.white} ${signupStyles.signupLogo}`} src={Icon} />
            </div>
          </div>
          <h3 className={commonStyles.textAlignCenter}>Sign up</h3>
        </div>
        <div className={commonStyles.formContainer}>
          <div className={commonStyles.inputFlexRowContainer}>
            <div className={commonStyles.inputSmallArea}>
              <label className={placeholderStyles.labelInputPlaceholder}>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="&nbsp;"
                  required
                  className={placeholderStyles.labelInputPlaceholder}
                />
                <span className={placeholderStyles.labelPlaceholder}>First Name *</span>
              </label>
            </div>
            <div className={commonStyles.inputSmallArea}>
              <label className={placeholderStyles.labelInputPlaceholder}>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="&nbsp;"
                  required
                  className={placeholderStyles.labelInputPlaceholder}
                />
                <span className={placeholderStyles.labelPlaceholder}>Last Name *</span>
              </label>
            </div>
          </div>
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
              <input type="checkbox" name="mailmagazine" id="mailmagazine" className={commonStyles.checkboxInput} />
              <span className={commonStyles.checkboxParts}>メールマガジン登録</span>
            </label>
          </div>
          <div className={commonStyles.submitBtnArea}>
            <button className={commonStyles.submitBtn} onClick={() => signup()}>
              Sign up
            </button>
          </div>
          <div className={signupStyles.linkSignupContainer}>
            <div>
              <Link to="/login">ログインへ</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
