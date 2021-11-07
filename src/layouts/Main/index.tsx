import React from "react";
import styles from "./Main.module.css";

const MainLayout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
