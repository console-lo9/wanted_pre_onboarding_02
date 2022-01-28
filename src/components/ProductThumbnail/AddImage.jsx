import { useRef, useState } from "react";

import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import UploadInput from "layout/Inputs/UploadInput";
import Button from "layout/Button";

import styles from "./AddImage.module.css";

const AddImage = () => {
  const uploadRef = useRef();
  const [uploadedImg, setUploadedImg] = useState([]);

  const uploadHandler = () => {
    uploadRef.current.click();
  };

  const changeFileHandler = (e) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      setUploadedImg((prev) => {
        return [...prev, { id: Math.random(), name: files[i].name }];
      });
    }
  };

  const removeHandler = (e) => {
    const buttonId = e.target.id;
    setUploadedImg(uploadedImg.filter((data) => data.id != buttonId));
  };

  return (
    <SectionBody className={styles.addImage}>
      <SectionBodyContent className={styles.flexWrapper}>
        <UploadInput
          onClick={uploadHandler}
          onChange={changeFileHandler}
          uploadRef={uploadRef}
        >
          + 이미지 추가
        </UploadInput>
        <ul>
          {uploadedImg.map((data) => {
            return (
              <li key={data.id}>
                <div>{data.name}</div>
                <Button id={data.id} tag="xBadge" onClick={removeHandler}>
                  ×
                </Button>
              </li>
            );
          })}
        </ul>
      </SectionBodyContent>
    </SectionBody>
  );
};

export default AddImage;
