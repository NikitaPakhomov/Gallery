import React from "react";

import styles from "./PageNumber.module.css";

interface Props {
  children: number;
  setCurrentPage: (pageNumber: number) => void;
  isCurrentPage: boolean;
}

const PageNumber: React.FC<Props> = ({
  children,
  setCurrentPage,
  isCurrentPage,
}) => {
  return (
    <button
      className={`${styles.wrapper} ${isCurrentPage ? styles.active : ""}`}
      onClick={() => setCurrentPage(children)}
    >
      {children}
    </button>
  );
};

export default React.memo(PageNumber);
