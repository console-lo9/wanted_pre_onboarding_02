import AttachImage from "./AttachImage";

import { ImageProvider } from "components/ProductInfo/UploadImage/Contexts";
import PrintImageName from "./PrintImageName";

const UploadImage = ({ multiple }) => {
  return (
    <ImageProvider>
      <AttachImage multiple={multiple} />
      <PrintImageName />
    </ImageProvider>
  );
};

export default UploadImage;
