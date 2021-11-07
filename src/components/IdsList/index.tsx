import React from "react";

import styles from "./IdsList.module.css";
import useIdsList from "./useIdsList";

interface Props {
  setFilter: (filter: string | number) => void;
}

const IdsList: React.FC<Props> = ({ setFilter }) => {
  const { ids } = useIdsList();
  return (
    <div className={styles.wrapper}>
      <select name="select" onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        {ids.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </select>
    </div>
  );
};

export default IdsList;
