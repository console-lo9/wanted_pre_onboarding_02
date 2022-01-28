import AttachImage from "./AttachImage";
import UploadImages from "components/UploadImages";
import PrintImageName from "./PrintImageName";
import { ImageProvider } from "components/ProductInfo/UploadImage/Contexts";

const UploadImage = ({ multiple }) => {
  return (
    <ImageProvider>
      <UploadImages multiple={multiple} />
      {/* <AttachImage multiple={multiple} />
      <PrintImageName /> */}
    </ImageProvider>
  );
};

export default UploadImage;
