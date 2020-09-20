import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postArticleStyles from "../stylesheets/postArticle.module.scss";
import getArticleStyles from "../stylesheets/getArticle.module.scss";
import commonStyles from "../Stylesheets/common.module.scss";
import Icon from "../assets/add_task.svg";
import { fethAllArticles, addReceivedArticle } from "../redux/actions";
import { useSocket } from "../components/SocketProvider";
import ListArticle from "../components/ListArticle";

/**
 * 閲覧ページ
 * 投稿を一覧表示する
 */
const GetArticle = () => {
  const articles = useSelector((state) => state.articles.articles);
  useEffect(() => {
    console.log(socket);
    if (articles.length == 0) {
      dispach(fethAllArticles());
    }
  });
  const dispach = useDispatch();
  const socket = useSocket(
    (socket) => {
      socket.on("receiveArticle", (article) => {
        dispach(addReceivedArticle({ article }));
      });
    },
    (socket) => {
      socket.off("receiveArticle");
    }
  );
  return (
    <div className={commonStyles.mainContainer}>
      <div className={commonStyles.contentsContainer}>
        <div className={postArticleStyles.mainContainer}>
          <div className={commonStyles.titleContainer}>
            <div className={commonStyles.textAlignCenter}>
              <div className={commonStyles.logoCircleArea}>
                <img className={`${commonStyles.noSelect} ${commonStyles.white} ${postArticleStyles.logo}`} src={Icon} />
              </div>
            </div>
            <h3 className={commonStyles.textAlignCenter}>閲覧</h3>
          </div>
          <div className={`${getArticleStyles.articleContainer} ${getArticleStyles.headerContainer}`} key="header">
            <span>タイトル</span>
            <span>内容</span>
            <span>イメージ</span>
          </div>
          <ListArticle articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default GetArticle;
