import React, { useContext, useEffect, useRef, useState } from "react";

import { ImageContext } from "components/ProductInfo/UploadImage/Contexts";

const AttachImage = ({ multiple }) => {
  const { images, setImages } = useContext(ImageContext);
  const fileInput = useRef();
  const onLoadFile = (e) => {
    if (multiple) {
      let files = [];
      Object.entries(e.target.files).map(([id, item]) => {
        files.push(item.name);
      });
      setImages(images.concat(files));
      e.target.value = "";
    } else {
      setImages([e.target.files[0].name]);
      e.target.value = "";
    }
  };
  const handleClick = () => {
    fileInput.current.click();
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        이미지 첨부
      </button>
      <input
        type="file"
        onChange={onLoadFile}
        ref={fileInput}
        multiple={multiple}
        style={{ display: "none" }}
      />
    </div>
  );
};
export default AttachImage;
