import React from "react";
import getArticleStyles from "../stylesheets/getArticle.module.scss";

const ListArticle = ({ articles }) => {
  const articlesElement = articles.map((article, index) => {
    return (
      <div className={getArticleStyles.articleContainer} key={index}>
        <span>{article.title}</span>
        <span>{article.contents}</span>
        <img className={getArticleStyles.image} src={article.image} />
      </div>
    );
  });
  return <div className={getArticleStyles.articlesContainer}>{articlesElement}</div>;
};

export default ListArticle;
