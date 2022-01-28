import AttachImage from "./AttachImage";

import { ImageProvider } from "components/ProductInfo/UploadImage/Contexts";
import PrintImageName from "./PrintImageName";

const UploadImage = ({ multiple }) => {
  return (
    <ImageProvider>
      <AttachImage multiple={multiple} />
      <PrintImageName multiple={multiple} />
    </ImageProvider>
  );
};

export default UploadImage;
