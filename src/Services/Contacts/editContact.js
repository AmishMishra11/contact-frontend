import axios from "axios";

export const editContact = async (id, contactData, dispatchContact) => {
  try {
    dispatchContact({
      type: "SET_LOADING_TRUE",
    });
    const res = await axios({
      method: "PUT",
      url: `https://contact-backend.cyclic.cloud/contacts/${id}`,
      data: {
        contactData: {
          name: contactData.contactName,
          email: contactData.contactEmail,
          phone: contactData.contactPhoneNumber,
        },
      },
    });
    if (res.status === 201) {
      dispatchContact({
        type: "LOAD_ALL_CONTACTS",
        payload: res.data.contacts,
      });
    }
  } catch (e) {
    console.log("error occured");
  }
};
