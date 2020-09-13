import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import postArticleStyles from "../stylesheets/postArticle.module.scss";
import getArticleStyles from "../stylesheets/getArticle.module.scss";
import commonStyles from "../Stylesheets/common.module.scss";
import Icon from "../assets/add_task.svg";
import { changeLoginStatus } from "../redux/actions";
import axios from "axios";

const GetArticle = () => {
  const [articles, setArticles] = useState([]);
  console.log(articles);
  const dispach = useDispatch();
  useEffect(() => {
    if (articles.length == 0) {
      axios
        .post("/article/fetchAll")
        .then((res) => {
          setArticles(res.data.articles);
        })
        .catch(() => {
          dispach(changeLoginStatus({ isLogin: false, isAdmin: false, isUser: false }));
        });
    }
  });
  const articlesElement = articles.map((article, index) => {
    console.log(article);
    return (
      <div className={getArticleStyles.articleContainer} key={index}>
        <span>{article.title}</span>
        <span>{article.contents}</span>
        <img className={getArticleStyles.image} src={article.image} />
      </div>
    );
  });
  console.log(articlesElement);
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
          <div className={getArticleStyles.articlesContainer}>
            <div className={`${getArticleStyles.articleContainer} ${getArticleStyles.headerContainer}`} key="header">
              <span>タイトル</span>
              <span>内容</span>
              <span>イメージ</span>
            </div>
            {articlesElement}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetArticle;
