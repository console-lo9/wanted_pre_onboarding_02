import styles from "./SectionBody.module.css";

const SectionBody = (props) => {
  return (
    <div className={`${styles.body} ${props.className}`}>{props.children}</div>
  );
};

export default SectionBody;
