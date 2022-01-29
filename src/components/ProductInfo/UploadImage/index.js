import UploadImages from "components/UploadImages";
import { ImageProvider } from "components/ProductInfo/UploadImage/Contexts";
// import AttachImage from "./AttachImage";
// import PrintImageName from "./PrintImageName";

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
