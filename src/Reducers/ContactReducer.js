export const contactReducer = (stateContact, actionContact) => {
  switch (actionContact.type) {
    case "LOAD_ALL_CONTACTS":
      return {
        ...stateContact,
        allContacts: actionContact.payload,
        isLoading: false,
      };

    case "SET_SINGLE_CONTACT":
      return {
        ...stateContact,
        singleContact: actionContact.payload,
        isLoading: false,
      };

    case "REMOVE_SINGLE_CONTACT":
      return { ...stateContact, singleContact: {}, isLoading: false };

    case "SET_LOADING_TRUE":
      return { ...stateContact, isLoading: true };

    default:
      return stateContact;
  }
};
