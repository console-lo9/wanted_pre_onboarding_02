import React, { useRef, useState } from "react";

import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import UploadInput from "components/UploadImages/UploadInput";
import Button from "layout/Button";

import styles from "./AddImage.module.css";

const AddImage = ({ multiple }) => {
  const uploadRef = useRef();
  const [uploadedImg, setUploadedImg] = useState([]);

  const uploadHandler = () => {
    uploadRef.current.click();
  };

  const changeFileHandler = (e) => {
    const files = e.target.files;
    Object.entries(files).map(([id, item]) => {
      setUploadedImg((prev) => {
        return [{ id: item.id, name: item.name }, ...prev];
      });
    });
  };

  const removeHandler = (e) => {
    const buttonId = e.target.id;
    setUploadedImg(uploadedImg.filter((data) => data.id !== buttonId));
  };
  React.useEffect(() => {
    console.log(uploadedImg);
  });

  return (
    <SectionBodyContent className={styles.flexWrapper}>
      <UploadInput
        onClick={uploadHandler}
        onChange={changeFileHandler}
        uploadRef={uploadRef}
        multiple={multiple}
      >
        + 이미지 첨부
      </UploadInput>
      <ul>
        {uploadedImg.map((data) => {
          return (
            <div className={styles.printoutput} key={Math.random()}>
              <div>{data.name}</div>
              <Button id={data.id} tag="xBadge" onClick={removeHandler}>
                ×
              </Button>
            </div>
          );
        })}
      </ul>
    </SectionBodyContent>
  );
};

export default AddImage;
