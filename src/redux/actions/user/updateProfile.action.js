import { updateProfile, errorUserRequest } from "../../slices/user/user.slice";
import { baseApiURL, profileEndpoint } from "../../../api/urls";
import axios from "axios";

export const actionUpdateProfile = async (dispatch, token) => {
  try {
    let response = await axios.put(
      baseApiURL + profileEndpoint,
      {},
      {
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    );
    dispatch(
      updateProfile({
        profile: response.data,
        status: response.status,
        message: response.message,
      })
    );
  } catch (err) {
    console.log(err);
    dispatch(
      errorUserRequest({
        status: err.code,
        message: err.message,
      })
    );
  }
};
