import { Fragment } from "react";
import styles from "./UploadInput.module.css";

const UploadInput = () => {
  return (
    <div className={styles.upload}>
      <label htmlFor="upload-input">+ 이미지 추가</label>
      <input type="file" style={{ display: "none" }} id="upload-input" />
    </div>
  );
};

export default UploadInput;
