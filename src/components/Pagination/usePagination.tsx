const usePagination = (currentPage: number, filterType: string | number) => {
  const length = filterType === "All" ? currentPage + 9 : 3;
  const visiblePagesCount = Array.from({ length }, (_, i) => i + 1);

  return { visiblePagesCount };
};

export default usePagination;
