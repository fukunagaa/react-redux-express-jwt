import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import className from "classnames";
import Icon from "../assets/create-signup.svg";
import commonStyles from "../Stylesheets/common.module.scss";
import signupStyles from "../Stylesheets/signup.module.scss";
import placeholderStyles from "../stylesheets/inputPlaceholder.module.scss";
import { signupRequest } from "../redux/actions";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { signupState } = useSelector((state) => state.user);
  const dispach = useDispatch();
  const signup = () => {
    if (password1 != password2) {
      setErrorMessage("** 入力されたパスワードが一致しません。 **");
    } else {
      dispach(signupRequest({ email, userName, password: password1, firstName, lastName }));
    }
  };
  const fetchMessage = signupState.errorFlag ? commonStyles.errorMessage : commonStyles.successMessage;
  const errorElement =
    errorMessage.length == 0 ? (
      <span></span>
    ) : (
      <div className={commonStyles.textAlignCenter}>
        <span className={commonStyles.errorMessage}>{errorMessage}</span>
      </div>
    );
  return (
    <div className={commonStyles.mainContainer}>
      <div className={commonStyles.contentsContainer}>
        <div className={commonStyles.titleContainer}>
          <div className={commonStyles.textAlignCenter}>
            <div className={commonStyles.logoCircleArea}>
              <img className={`${commonStyles.noSelect} ${commonStyles.white} ${signupStyles.logo}`} src={Icon} />
            </div>
          </div>
          <h3 className={commonStyles.textAlignCenter}>Sign up</h3>
        </div>
        <div className={commonStyles.formContainer}>
          <div className={commonStyles.textAlignCenter}>
            <span className={fetchMessage}>{signupState.message}</span>
          </div>
          {errorElement}
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
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
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
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className={placeholderStyles.labelPlaceholder}>Email Address *</span>
            </label>
          </div>
          <div className={commonStyles.inputBigArea}>
            <label className={placeholderStyles.labelInputPlaceholder}>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="&nbsp;"
                required
                className={placeholderStyles.labelInputPlaceholder}
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
              <span className={placeholderStyles.labelPlaceholder}>User Name*</span>
            </label>
          </div>
          <div className={commonStyles.inputBigArea}>
            <label className={placeholderStyles.labelInputPlaceholder}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="&nbsp;"
                required
                className={placeholderStyles.labelInputPlaceholder}
                value={password1}
                onChange={(event) => setPassword1(event.target.value)}
              />
              <span className={placeholderStyles.labelPlaceholder}>Password *</span>
            </label>
          </div>
          <div className={commonStyles.inputBigArea}>
            <label className={placeholderStyles.labelInputPlaceholder}>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="&nbsp;"
                required
                className={placeholderStyles.labelInputPlaceholder}
                value={password2}
                onChange={(event) => setPassword2(event.target.value)}
              />
              <span className={placeholderStyles.labelPlaceholder}>one more Password *</span>
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
