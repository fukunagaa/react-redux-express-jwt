import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Cropper from "react-easy-crop";
import postArticleStyles from "../stylesheets/postArticle.module.scss";
import commonStyles from "../Stylesheets/common.module.scss";
import placeholderStyles from "../stylesheets/inputPlaceholder.module.scss";
import Icon from "../assets/add_task.svg";
import getCroppedImg from "./CropImage";
import "regenerator-runtime/runtime";

const Home = () => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [selectImage, setSelectImage] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const showCroppedImage = useCallback(async () => {
    try {
      const cropped = await getCroppedImg(selectImage, croppedAreaPixels, rotation);
      console.log("donee", { cropped });
      setCroppedImage(cropped);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);
  const getBase64 = (imgfile) => {
    console.log(imgfile.files[0]);
    if (!imgfile.files.length) return;
    var file = imgfile.files[0];
    var fr = new FileReader();
    fr.onload = function (evt) {
      setSelectImage(evt.target.result);
    };
    fr.readAsDataURL(file);
  };
  const reset = () => {
    setSelectImage("");
    setCroppedImage(null);
  };
  const dispach = useDispatch();
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
              <img
                className={postArticleStyles.image}
                src={croppedImage}
                className={postArticleStyles.cropContainer}
              ></img>
              <div className={postArticleStyles.imageSelector}>
                <div>
                  <label className={postArticleStyles.inputFileLabel}>
                    JPGファイルを選択
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => getBase64(event.target)}
                      className={postArticleStyles.invalid}
                    />
                  </label>
                </div>
                <div>
                  <button onClick={() => reset()}>reset</button>
                </div>
              </div>
            </div>
            <div className={commonStyles.submitBtnArea}>
              <button className={commonStyles.submitBtn} onClick={() => console.log("click")}>
                登録
              </button>
            </div>
          </div>
        </div>
        {(selectImage == "" && croppedImage == null) || croppedImage != null ? (
          <div></div>
        ) : (
          <div>
            <Cropper
              image={selectImage}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            <div>
              <input
                type="range"
                min="0"
                max="3"
                step="0.1"
                value={zoom}
                onChange={(event) => setZoom(event.target.value)}
                className={postArticleStyles.zoom}
              />
              <label>Zoom</label>
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={rotation}
                onChange={(event) => setRotation(event.target.value)}
                className={postArticleStyles.rotation}
              />
              <label>Rotation</label>
            </div>
            <button className={postArticleStyles.btn} onClick={() => showCroppedImage()}>
              Result
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
