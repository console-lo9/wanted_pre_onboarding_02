import React, { useContext, useRef } from "react";

import { ImageContext } from "components/ProductInfo/UploadImage/Contexts";

import Button from "layout/Button";
const AttachImage = ({ multiple }) => {
  const { images, setImages } = useContext(ImageContext);
  const fileInput = useRef();
  const onLoadFile = (e) => {
    if (multiple) {
      let files = [];
      Object.entries(e.target.files).map(([id, item]) => {
        return files.push(item.name);
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
      <Button tag="addIMG" onClick={handleClick}>
        + 이미지 첨부
      </Button>
      <input
        type="file"
        accept="image/*"
        onChange={onLoadFile}
        ref={fileInput}
        multiple={multiple}
        style={{ display: "none" }}
      />
    </div>
  );
};
export default AttachImage;
