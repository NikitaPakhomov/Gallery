import React from "react";

import styled from "./Pagination.module.css";

import PageNumber from "./components/PageNumber";

import usePagination from "./usePagination";

interface Props {
  currentPage: number;
  setCurrentPage: (id: number) => void;
  filterType: string | number;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  filterType,
}) => {
  const { visiblePagesCount } = usePagination(currentPage, filterType);

  return (
    <div className={styled.wrapper}>
      {visiblePagesCount.map((pageNumber) => (
        <PageNumber
          isCurrentPage={currentPage === pageNumber}
          setCurrentPage={setCurrentPage}
          key={pageNumber}
        >
          {pageNumber}
        </PageNumber>
      ))}
    </div>
  );
};

export default Pagination;
