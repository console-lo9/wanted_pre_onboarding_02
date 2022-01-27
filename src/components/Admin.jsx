import styles from "./Admin.module.css";

const Admin = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={`${styles["nav-top"]}`}>
          <div className={styles.logo}>
            <span>
              <img
                src="https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo_white.png"
                alt="logo"
              ></img>
            </span>
            <span>ADMIN</span>
          </div>
        </nav>
        <nav className={`${styles["nav-bottom"]}`}>
          <div>
            <span>상품등록</span>
            <span>ADM_PRODUCT_AD</span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Admin;
