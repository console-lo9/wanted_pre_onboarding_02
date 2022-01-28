import React, { useContext, useRef, useState } from "react";

import { ImageContext } from "components/ProductInfo/UploadImage/Contexts";

const AttachImage = ({ multiple }) => {
  const { images, setImages } = useContext(ImageContext);
  const fileInput = useRef();
  const onLoadFile = (e) => {
    if (multiple) {
      setImages([...images, e.target.files[0]]);
    } else {
      setImages([e.target.files[0]]);
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
