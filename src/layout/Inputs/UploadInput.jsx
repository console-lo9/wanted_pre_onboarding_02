import { Fragment } from "react";
import styles from "./UploadInput.module.css";

const UploadInput = (props) => {
  return (
    <div className={styles.upload}>
      <label htmlFor="upload-input" onClick={props.onClick}>
        {props.children}
      </label>
      <input
        type="file"
        style={{ display: "none" }}
        id="upload-input"
        ref={props.useRef}
        onChange={props.onChange}
      />
    </div>
  );
};

export default UploadInput;
