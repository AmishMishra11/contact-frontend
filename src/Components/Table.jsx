import React from "react";
import { deleteContact } from "../Services/Contacts/deleteContact";
import { useContact } from "../Context/ContactContext";

function Table({ data, setShowModal }) {
  const { dispatchContact } = useContact();

  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Contact Name
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Created Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((contact) => (
            <tr key={contact._id} className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {contact.name}
              </th>
              <td className="px-6 py-4">{contact.phone}</td>
              <td className="px-6 py-4">{contact.email}</td>
              <td className="px-6 py-4">
                {new Date(contact.created_Date)
                  .toISOString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </td>
              <td className="px-6 py-4 ">
                <div
                  className="font-medium text-blue-600 cursor-pointer hover:underline"
                  onClick={() => {
                    setShowModal(true);
                    dispatchContact({
                      type: "SET_SINGLE_CONTACT",
                      payload: contact,
                    });
                  }}
                >
                  Edit
                </div>
              </td>
              <td className="px-6 py-4 ">
                <div
                  className="font-medium text-blue-600 cursor-pointer hover:underline"
                  onClick={() => deleteContact(dispatchContact, contact._id)}
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
