import styles from "./UploadInput.module.css";

const UploadInput = (props) => {
  return (
    <div className={styles.upload}>
      <label onClick={props.onClick}>{props.children}</label>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={props.onChange}
        ref={props.uploadRef}
        multiple={props.multiple}
      />
    </div>
  );
};

export default UploadInput;
