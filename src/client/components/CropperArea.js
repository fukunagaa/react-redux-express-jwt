import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/CropImage";
import postArticleStyles from "../stylesheets/postArticle.module.scss";
import "regenerator-runtime/runtime";

const CropperArea = ({ selectImage, setCroppedImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
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
  return (
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
  );
};

export default CropperArea;
