import React, { createContext, useContext, useReducer } from "react";
import { contactReducer } from "../Reducers/ContactReducer";

const ContactContext = createContext(null);

const useContact = () => useContext(ContactContext);

const ContactContextProvider = ({ children }) => {
  const [stateContact, dispatchContact] = useReducer(contactReducer, {
    allContacts: [],
    singleContact: {},
    isLoading: true,
  });

  return (
    <ContactContext.Provider value={{ stateContact, dispatchContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { useContact, ContactContextProvider };
