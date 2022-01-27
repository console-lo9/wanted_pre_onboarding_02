import PreOrderDelivery from "./PreOrderDelivery";
import ProductDepartureDate from "./ProductDepartureDate";
import Visiting from "./Visiting";
import styles from "./index.module.css";

export const ProductDelivery = () => {
  return (
    <div className={styles.container}>
      <ProductDepartureDate />
      <Visiting />
      <PreOrderDelivery />
    </div>
  );
};
