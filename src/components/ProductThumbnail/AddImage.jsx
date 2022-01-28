import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";

import UploadInput from "layout/Inputs/UploadInput";

import styles from "./AddImage.module.css";

const AddImage = () => {
  return (
    <SectionBody className={styles.addImage}>
      <SectionBodyContent>
        <UploadInput />
      </SectionBodyContent>
    </SectionBody>
  );
};

export default AddImage;
