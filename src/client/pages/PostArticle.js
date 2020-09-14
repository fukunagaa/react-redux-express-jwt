import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postArticleStyles from "../stylesheets/postArticle.module.scss";
import commonStyles from "../Stylesheets/common.module.scss";
import placeholderStyles from "../stylesheets/inputPlaceholder.module.scss";
import Icon from "../assets/add_task.svg";
import CropperArea from "../components/CropperArea";
import { postArticleRequest } from "../redux/actions";
import { useSocket } from "../components/SocketProvider";

const PostArticle = () => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [selectImage, setSelectImage] = useState("");
  const [croppedImage, setCroppedImage] = useState(null);
  const postArticleState = useSelector((state) => state.articles.postArticleState);
  const dispach = useDispatch();
  const socket = useSocket(
    (socket) => {
      socket.on("myreceive1", (article) => {
        console.log(article);
      });
    },
    (socket) => {
      socket.off("myreceive1");
    }
  );
  console.log(socket);
  const getBase64 = (imgfile) => {
    setSelectImage("");
    setCroppedImage(null);
    console.log(imgfile.files[0]);
    if (!imgfile.files.length) return;
    var file = imgfile.files[0];
    var fr = new FileReader();
    fr.onload = function (evt) {
      setSelectImage(evt.target.result);
    };
    fr.readAsDataURL(file);
  };
  const postArticle = () => {
    socket.emit("myevent1", {
      title,
      contents,
      image: croppedImage,
    });
    dispach(postArticleRequest({ title, contents, image: croppedImage }));
  };
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
            <h3 className={commonStyles.textAlignCenter}>登録</h3>
          </div>
          <div className={commonStyles.formContainer}>
            <div className={commonStyles.textAlignCenter}>
              <span className={commonStyles.successMessage}>{postArticleState.message}</span>
            </div>
            <div className={commonStyles.inputBigArea}>
              <label className={placeholderStyles.labelInputPlaceholder}>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="&nbsp;"
                  required
                  className={placeholderStyles.labelInputPlaceholder}
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <span className={placeholderStyles.labelPlaceholder}>タイトル</span>
              </label>
            </div>
            <div className={commonStyles.inputBigArea}>
              <label className={placeholderStyles.labelInputPlaceholder}>
                <input
                  type="text"
                  name="contents"
                  id="contents"
                  placeholder="&nbsp;"
                  required
                  className={placeholderStyles.labelInputPlaceholder}
                  value={contents}
                  onChange={(event) => setContents(event.target.value)}
                />
                <span className={placeholderStyles.labelPlaceholder}>内容</span>
              </label>
            </div>
            <div className={postArticleStyles.imageContainer}>
              <div className={postArticleStyles.cropContainer}>
                <img className={postArticleStyles.image} src={croppedImage} className={postArticleStyles.image} />
              </div>
              <div className={postArticleStyles.imageSelector}>
                <div>
                  <label className={postArticleStyles.inputFileLabel}>
                    JPGファイル を選択*
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => getBase64(event.target)}
                      className={postArticleStyles.invalid}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className={commonStyles.submitBtnArea}>
              <button className={commonStyles.submitBtn} onClick={() => postArticle()}>
                登録
              </button>
            </div>
          </div>
        </div>
        {(selectImage == "" && croppedImage == null) || croppedImage != null ? (
          <div></div>
        ) : (
          <CropperArea selectImage={selectImage} setCroppedImage={setCroppedImage} />
        )}
      </div>
    </div>
  );
};

export default PostArticle;
