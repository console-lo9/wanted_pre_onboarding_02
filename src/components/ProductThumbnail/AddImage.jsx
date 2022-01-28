import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";

import UploadInput from "layout/Inputs/UploadInput";
import Button from "layout/Button";
import styles from "./AddImage.module.css";

const AddImage = () => {
  return (
    <SectionBody className={styles.addImage}>
      <SectionBodyContent>
        <UploadInput />
        <Button tag="xBadge">×</Button>
      </SectionBodyContent>
    </SectionBody>
  );
};

export default AddImage;
