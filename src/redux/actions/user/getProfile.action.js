import { getProfile, errorUserRequest } from "../../slices/user/user.slice";
import { baseApiURL, profileEndpoint } from "../../../api/urls";
import axios from "axios";

export const actionGetProfile = async (dispatch, token) => {
  try {
    let response = await axios.get(
      baseApiURL + profileEndpoint,
      {},
      {
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    );
    dispatch(
      getProfile({
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
