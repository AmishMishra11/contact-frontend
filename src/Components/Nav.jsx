import React from "react";

import { BsPlusCircleFill } from "react-icons/bs";

function Nav({ setSort, setSearch, setShowModal }) {
  return (
    <div className="w-full bg-[#555079] flex items-center justify-between p-4">
      <div>Contacts</div>
      <div className="flex items-center justify-between gap-2">
        <input
          className="p-1 rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-1 rounded-md"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value={"ascending"} key={"ascending"}>
            Ascending
          </option>
          <option value={"descending"} key={"descending"}>
            Descending
          </option>
        </select>
        <BsPlusCircleFill
          onClick={() => setShowModal(true)}
          className="text-2xl m-2 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Nav;
