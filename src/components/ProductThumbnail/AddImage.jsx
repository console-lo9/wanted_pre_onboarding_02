import { useRef } from "react";
import { useSelector } from "react-redux";

import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import UploadInput from "layout/Inputs/UploadInput";

import styles from "./AddImage.module.css";

const AddImage = () => {
  const uploadRef = useRef();
  const uploadedImgState = useSelector(
    (state) => state.upload.introduce.imgArr
  );

  const test = uploadedImgState.map((d) => {
    console.log(d);
  });

  //   const onLoadFile = (e) => {
  //     if (multiple) {
  //       let files = [];
  //       Object.entries(e.target.files).map(([id, item]) => {
  //         return files.push(item.name);
  //       });
  //       setImages(images.concat(files));
  //       e.target.value = "";
  //     } else {
  //       setImages([e.target.files[0].name]);
  //       e.target.value = "";
  //     }
  //   };
  const handleClick = () => {};

  return (
    <SectionBody className={styles.addImage}>
      <SectionBodyContent>
        <UploadInput onClick={handleClick} useRef={uploadRef} />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default AddImage;
