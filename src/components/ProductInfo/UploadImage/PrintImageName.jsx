import React, { useContext, useEffect } from "react";
import { ImageContext } from "components/ProductInfo/UploadImage/Contexts";
import Button from "layout/Button";

import styles from "./PrintImageName.module.css";

const PrintImageName = () => {
  const { images, setImages } = useContext(ImageContext);
  const onRemove = (e) => {
    const newImages = images.filter((data) => data.id !== e.target.id);
    console.log(newImages);
    // setImages([...newImages]);
  };
  useEffect(() => {
    console.log(images);
  }, [images]);
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
      {images.map((data) => {
        return (
          <div className={styles.container} key={Math.random()}>
            <div>{data.name}</div>
            <Button id={data.id} tag="xBadge" onClick={onRemove}>
              ×
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default PrintImageName;
