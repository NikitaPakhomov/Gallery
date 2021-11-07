import { useEffect, useState } from "react";
import { ImageInfo } from "./../../interface/index";
import urlControl from "../../lib/url";

const useHome = () => {
  const [filterType, setFilterType] = useState<string | number>("All");
  const [currentPage, setCurrentPage] = useState(urlControl.getCurrentPage());
  const [data, setData] = useState<ImageInfo[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(urlControl.getInfoByPage(currentPage, filterType))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("problemssss....  ", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, filterType]);

  const setFilter = (type: string | number) => {
    setFilterType(type);
    setCurrentPage(1);
  };

  const deleteCard = (id: number) => {
    const newData = [...data];
    newData.splice(
      newData.findIndex((item) => {
        return item.id === id;
      }),
      1
    );
    setData(newData);
  };

  return {
    isLoading,
    isError,
    data,
    currentPage,
    deleteCard,
    setCurrentPage,
    setFilter,
    filterType,
  };
};

export default useHome;
