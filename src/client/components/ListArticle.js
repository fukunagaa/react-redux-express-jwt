import React from "react";
import getArticleStyles from "../stylesheets/getArticle.module.scss";

/**
 * 記事を表として表示する
 * @param {表示する記事のリスト} articles
 */
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
