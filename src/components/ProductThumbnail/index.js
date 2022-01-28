import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
import AddImage from "./AddImage";

const ProductThumbnail = () => {
  return (
    <SectionWrapper>
      <SectionHeader>상품 소개 이미지</SectionHeader>
      <AddImage />
    </SectionWrapper>
  );
};

export default ProductThumbnail;
