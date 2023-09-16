import axios from "axios";

export const deleteContact = async (dispatchContact, id) => {
  try {
    dispatchContact({
      type: "SET_LOADING_TRUE",
    });
    const res = await axios({
      method: "DELETE",
      url: `https://contact-backend.cyclic.cloud/contacts/${id}`,
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
