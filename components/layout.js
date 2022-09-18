import styles from "./layout.module.css";

export const layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
