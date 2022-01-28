import React, { useContext, useEffect, useRef, useState } from "react";
import { ImageContext } from "components/ProductInfo/UploadImage/Contexts";
const PrintImageName = ({ multiple }) => {
  const { images, setImages } = useContext(ImageContext);
  const [singleImage, setSingleImage] = useState("");
  useEffect(() => {
    if (images.length && !multiple) {
      setSingleImage(images[images.length - 1].name);
    }
  }, [images]);
  return (
    <div>
      {images.length && multiple ? (
        images.map((img, index) => {
          return <p key={index}>{img.name}</p>;
        })
      ) : (
        <p>{singleImage}</p>
      )}
    </div>
  );
};
export default PrintImageName;
