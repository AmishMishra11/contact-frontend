import axios from "axios";

export const getAllContacts = async (dispatchContact) => {
  try {
    const res = await axios({
      method: "GET",
      url: "https://contact-backend.cyclic.cloud/contacts",
    });

    if (res.status === 200) {
      dispatchContact({
        type: "LOAD_ALL_CONTACTS",
        payload: res.data.contacts,
      });
    }
  } catch (e) {
    console.log("error occured");
  }
};
