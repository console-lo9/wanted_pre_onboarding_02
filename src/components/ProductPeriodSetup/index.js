import SectionHeader from "layout/Section/SectionHeader.jsx";
import SectionWrapper from "layout/Section/SectionWrapper";
import ProductExposurePeriod from "./ProductExposurePeriod.jsx";
import ProductSalsePeriod from "./ProductSalesPeriod.jsx";

const ProductPeriodSetup = () => {
  return (
    <SectionWrapper>
      <SectionHeader>노출 및 판매 기간 설정</SectionHeader>
      <ProductExposurePeriod />
      <ProductSalsePeriod />
    </SectionWrapper>
  );
};

export default ProductPeriodSetup;
