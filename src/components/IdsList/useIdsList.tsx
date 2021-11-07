import urlControl from "./../../lib/url";

const useIdsList = () => {
  const ids = Array.from(
    { length: urlControl.getAlbumIdsCount() },
    (_, i) => i + 1
  );
  return { ids };
};

export default useIdsList;
