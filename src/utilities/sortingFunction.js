const sortingFunction = (arrOfData, sort) => {
  if (sort === "ascending") {
    return [...arrOfData].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  if (sort === "descending") {
    return [...arrOfData].sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  return arrOfData;
};

export { sortingFunction };
