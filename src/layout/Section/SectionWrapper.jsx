import styles from "./SectionWrapper.module.css";

const SectionWrapper = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default SectionWrapper;
