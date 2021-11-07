import React from "react";

import Gallery from "../../components/Gallery";
import IdsList from "../../components/IdsList";
import Pagination from "../../components/Pagination";

import useHome from "./useHome";

const Home = () => {
  const {
    isError,
    isLoading,
    data,
    currentPage,
    deleteCard,
    setCurrentPage,
    setFilter,
    filterType,
  } = useHome();

  if (isError) {
    return <div>Something went wrong(((</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <IdsList setFilter={setFilter} />
      <Gallery imagesInfo={data} deleteCard={deleteCard} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filterType={filterType}
      />
    </div>
  );
};

export default Home;
