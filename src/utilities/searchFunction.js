const searchFunction = (arrOfData, search) => {
  if (search) {
    return [...arrOfData].filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return arrOfData;
};
export { searchFunction };
