import React from "react";

import commonStyles from "../Stylesheets/common.module.scss";
import placeholderStyles from "../stylesheets/inputPlaceholder.module.scss";

/**
 * ビッグサイズのinputエリアのコンポーネント
 * @param {inputのtype} type
 * @param {idとnameの名前} name
 * @param {inputのvalue} value
 * @param {valueのset関数} setValue
 * @param {placeholderに表示する名前} displayName
 */
const BigInput = ({ type, name, value, setValue, displayName }) => {
  return (
    <div className={commonStyles.inputBigArea}>
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

export default BigInput;
