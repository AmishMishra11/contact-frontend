import React, { useEffect, useState } from "react";
import { addContact } from "../Services/Contacts/addContact";
import { editContact } from "../Services/Contacts/editContact";
import { useContact } from "../Context/ContactContext";

function Modal({ onClose }) {
  const { stateContact, dispatchContact } = useContact();

  const { singleContact } = stateContact;

  const [isEdit, setIsEdit] = useState(false);

  const [tempContactDetails, setTempContactDetails] = useState({
    contactName: "",
    contactPhoneNumber: "",
    contactEmail: "",
  });

  useEffect(() => {
    if (Object.keys(singleContact).length) {
      setIsEdit(true);
      setTempContactDetails({
        ...tempContactDetails,
        contactName: singleContact.name,
        contactPhoneNumber: singleContact.phone,
        contactEmail: singleContact.email,
      });
    }
  }, [singleContact]);

  const handleChange = (e) => {
    setTempContactDetails({
      ...tempContactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    addContact(tempContactDetails, dispatchContact);
    setTempContactDetails({
      ...tempContactDetails,
      contactName: "",
      contactPhoneNumber: "",
      contactEmail: "",
    });
    onClose();
  };

  const handleEdit = () => {
    editContact(singleContact._id, tempContactDetails, dispatchContact);
    setTempContactDetails({
      ...tempContactDetails,
      contactName: "",
      contactPhoneNumber: "",
      contactEmail: "",
    });
    onClose();
    setIsEdit(false);
    dispatchContact({ type: "REMOVE_SINGLE_CONTACT" });
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50  flex items-center justify-center z-20"
      onClick={() => {
        setTempContactDetails({
          ...tempContactDetails,
          contactName: "",
          contactPhoneNumber: "",
          contactEmail: "",
        });
        onClose();
        setIsEdit(false);
        dispatchContact({ type: "REMOVE_SINGLE_CONTACT" });
      }}
    >
      <div
        className="h-60 w-96 bg-slate-200 rounded-lg p-4 flex flex-col items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2 w-80">
          <p>Name:</p>
          <input
            className=" p-1 text-base rounded-md  w-60 "
            placeholder="full name"
            name="contactName"
            value={tempContactDetails.contactName}
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between gap-2 w-80">
          <p>Phone:</p>
          <input
            className=" p-1 text-base rounded-md  w-60 "
            placeholder="1234567890"
            name="contactPhoneNumber"
            value={tempContactDetails.contactPhoneNumber}
            type="number"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between gap-2 w-80">
          <p>Email:</p>
          <input
            className=" p-1 text-base rounded-md  w-60 "
            placeholder="xyz@gmail.com"
            name="contactEmail"
            value={tempContactDetails.contactEmail}
            type="text"
            onChange={handleChange}
          />
        </div>
        {isEdit ? (
          <button
            className="bg-[#555079] text-white px-4 py-2 cursor-pointer w-32 rounded-md"
            onClick={handleEdit}
          >
            Edit
          </button>
        ) : (
          <button
            className="bg-[#555079] text-white px-4 py-2 cursor-pointer w-32 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;
