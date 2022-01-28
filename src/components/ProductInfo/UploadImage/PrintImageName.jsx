import React, { useContext, useEffect, useRef, useState } from "react";
import { ImageContext } from "components/ProductInfo/UploadImage/Contexts";
const PrintImageName = () => {
  const { images, setImages } = useContext(ImageContext);

  return (
    <div>
      {images &&
        images.map((img, index) => {
          return (
            <div key={index}>
              <p>{img.name}</p>
              <button>X</button>
            </div>
          );
        })}
    </div>
  );
};
export default PrintImageName;
