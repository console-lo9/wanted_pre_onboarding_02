import React, { useContext, useEffect, useRef, useState } from "react";
import { ImageContext } from "components/ProductInfo/UploadImage/Contexts";
const PrintImageName = () => {
  const { images, setImages } = useContext(ImageContext);
  const onRemove = (name) => {
    setImages(images.filter((img) => img !== name));
  };
  return (
    <div>
      {images &&
        images.map((img, index) => {
          return (
            <div key={index}>
              <p>{img}</p>
              <button onClick={() => onRemove(img)}>X</button>
            </div>
          );
        })}
    </div>
  );
};
export default PrintImageName;
