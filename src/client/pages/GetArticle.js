import React from "react";
import postArticleStyles from "../stylesheets/postArticle.module.scss";
import commonStyles from "../Stylesheets/common.module.scss";
import Icon from "../assets/add_task.svg";

const GetArticle = () => {
  return (
    <div className={commonStyles.mainContainer}>
      <div className={commonStyles.contentsContainer}>
        <div className={postArticleStyles.mainContainer}>
          <div className={commonStyles.titleContainer}>
            <div className={commonStyles.textAlignCenter}>
              <div className={commonStyles.logoCircleArea}>
                <img
                  className={`${commonStyles.noSelect} ${commonStyles.white} ${postArticleStyles.logo}`}
                  src={Icon}
                />
              </div>
            </div>
            <h3 className={commonStyles.textAlignCenter}>閲覧</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetArticle;
