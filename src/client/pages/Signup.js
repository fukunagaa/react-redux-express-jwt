import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "../assets/create-signup.svg";
import commonStyles from "../Stylesheets/common.module.scss";
import signupStyles from "../Stylesheets/signup.module.scss";
import { signupRequest } from "../redux/actions";
import BigInput from "../components/BigInput";
import SmallInput from "../components/SmallInput";
import SubmitButton from "../components/SubmitButton";

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

  /**
   * サインアップページ
   * ユーザの登録をする
   */
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
            <SmallInput type="text" name="firstName" value={firstName} setValue={setFirstName} displayName="First Name *" />
            <SmallInput type="text" name="lastName" value={lastName} setValue={setLastName} displayName="Last Name *" />
          </div>
          <BigInput type="text" name="email" value={email} setValue={setEmail} displayName="Email Address *" />
          <BigInput type="text" name="userName" value={userName} setValue={setUserName} displayName="User Name*" />
          <BigInput type="password" name="password1" value={password1} setValue={setPassword1} displayName="Password *" />
          <BigInput
            type="password"
            name="password2"
            value={password2}
            setValue={setPassword2}
            displayName="one more Password *"
          />
          <div className={commonStyles.checkboxContainer}>
            <label>
              <input type="checkbox" name="mailmagazine" id="mailmagazine" className={commonStyles.checkboxInput} />
              <span className={commonStyles.checkboxParts}>メールマガジン登録</span>
            </label>
          </div>
          <SubmitButton displayName="Sign up" submit={signup} />
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
