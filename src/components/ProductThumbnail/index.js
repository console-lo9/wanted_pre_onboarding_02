import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
import AddImage from "../UploadImages/AddImage";

const ProductThumbnail = () => {
  return (
    <SectionWrapper>
      <SectionHeader>상품 소개 이미지</SectionHeader>
      <AddImage multiple={true} />
    </SectionWrapper>
  );
};

export default ProductThumbnail;
