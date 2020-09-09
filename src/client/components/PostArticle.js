import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cropper from "react-easy-crop";
import postArticleStyles from "../stylesheets/postArticle.module.scss";
import getCroppedImg from "./CropImage";
import "regenerator-runtime/runtime";
import catImg from "../assets/cat.jpg";

const Home = () => {
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
      const cropped = await getCroppedImg(catImg, croppedAreaPixels, rotation);
      console.log("donee", { cropped });
      setCroppedImage(cropped);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);
  const dispach = useDispatch();
  return (
    <div>
      <h1>PostArticle Screen</h1>
      <div>
        <form method="post" action="/postArticle" className={postArticleStyles.mainContainer}>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="file" accept="image/*" />
          </div>
          <div className={postArticleStyles.cropContainer}>
            <Cropper
              image={catImg}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className={postArticleStyles.cropContainer}>
            <img className={postArticleStyles.image} src={croppedImage}></img>
          </div>
          <button type="submit">投稿する</button>
        </form>
        <div>
          <input
            type="range"
            min="0"
            max="3"
            step="0.1"
            value={zoom}
            onChange={(event) => setZoom(event.target.value)}
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
          />
          <label>Rotation</label>
        </div>
        <button onClick={() => showCroppedImage()}>Result</button>
      </div>
    </div>
  );
};

export default Home;
