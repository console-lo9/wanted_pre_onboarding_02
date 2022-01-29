import SectionHeader from "layout/Section/SectionHeader";
import SectionWrapper from "layout/Section/SectionWrapper";
<<<<<<< HEAD
import AddImage from "../UploadImages/AddImage";

const ProductThumbnail = () => {
  return (
    <SectionWrapper>
      <SectionHeader>상품 소개 이미지</SectionHeader>
      <AddImage multiple={true} />
    </SectionWrapper>
=======
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
>>>>>>> c62a416857a5acab971521069b77b45aa336e74e
  );
};

export default ProductThumbnail;
