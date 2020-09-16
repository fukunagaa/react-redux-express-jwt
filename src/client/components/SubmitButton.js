import React from "react";

import commonStyles from "../Stylesheets/common.module.scss";

const SubmitButton = ({ displayName, submit }) => {
  return (
    <div className={commonStyles.submitBtnArea}>
      <button className={commonStyles.submitBtn} onClick={() => submit()}>
        {displayName}
      </button>
    </div>
  );
};

export default SubmitButton;
