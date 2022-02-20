import React, { useCallback, useEffect, useState } from "react";

import styles from "components/ProductInfo/ProductInfo.module.css";

import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
const ProductCode = ({ product }) => {
  const [code, setCode] = useState(0);
  const generateCode = useCallback((s) => {
    if (s.length === 0) return 0;
    for (var i = 0, h = 9; i < s.length; )
      h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
    return Math.abs(h ^ (h >>> 9));
  }, []);
  useEffect(() => {
    setCode(generateCode(product));
  }, [product]);
  return (
    <SectionBody className={styles.container}>
      <ContentBodyTitle>상품코드</ContentBodyTitle>
      <SectionBodyContent>{code}</SectionBodyContent>
    </SectionBody>
  );
};

export default ProductCode;
