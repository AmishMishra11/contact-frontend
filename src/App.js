import { useEffect, useState } from "react";
import "./App.css";
import { getAllContacts } from "./Services/Contacts/getAllContacts";
import Table from "./Components/Table";
import Nav from "./Components/Nav";
import { sortingFunction } from "./utilities/sortingFunction";
import { searchFunction } from "./utilities/searchFunction";
import Modal from "./Components/Modal";
import { useContact } from "./Context/ContactContext";
import { all } from "axios";
import Loading from "./Components/Loading";

function App() {
  const { stateContact, dispatchContact } = useContact();

  const { allContacts, isLoading } = stateContact;

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ascending");

  const [showModal, setShowModal] = useState(false);

  const newData0 = searchFunction(allContacts, search);
  const newData1 = sortingFunction(newData0, sort);

  useEffect(() => {
    getAllContacts(dispatchContact);
  }, []);

  return (
    <div className="App">
      <Nav
        setSort={setSort}
        setSearch={setSearch}
        setShowModal={setShowModal}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Table data={newData1} setShowModal={setShowModal} />
      )}

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
