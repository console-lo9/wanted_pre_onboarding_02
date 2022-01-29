import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
import { Fragment } from "react";
import AddImage from "./AddImage";

const ProductThumbnail = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <SectionHeader>상품 소개 이미지</SectionHeader>
        <AddImage />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>구매자 추천 이미지</SectionHeader>
        <AddImage />
      </SectionWrapper>
    </Fragment>
  );
};

export default ProductThumbnail;
