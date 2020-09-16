import React from "react";

import commonStyles from "../Stylesheets/common.module.scss";
import placeholderStyles from "../stylesheets/inputPlaceholder.module.scss";

const SmallInput = ({ type, name, value, setValue, displayName }) => {
  return (
    <div className={commonStyles.inputSmallArea}>
      <label className={placeholderStyles.labelInputPlaceholder}>
        <input
          type={type}
          name={name}
          id={name}
          placeholder="&nbsp;"
          required
          className={placeholderStyles.labelInputPlaceholder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className={placeholderStyles.labelPlaceholder}>{displayName}</span>
      </label>
    </div>
  );
};

export default SmallInput;
