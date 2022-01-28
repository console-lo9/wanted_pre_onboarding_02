import React from "react";
import { useSelector } from "react-redux";

import Button from "layout/Button";

import styles from "./PrintImageName.module.css";

const PrintImageName = () => {
  const uploadedImgState = useSelector((state) => state.upload.introduce);
  console.log(uploadedImgState);

  // const onRemove = (name) => {
  //   setImages(images.filter((img) => img !== name));
  // };
  return (
    <div>
      {/* {images &&
        images.map((img, index) => {
          return (
            <div className={styles.print} key={index}>
              <p>{img}</p>
              <Button tag="xBadge" onClick={() => onRemove(img)}>
                ×
              </Button>
            </div>
          );
        })} */}
    </div>
  );
};
export default PrintImageName;
