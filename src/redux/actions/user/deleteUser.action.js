import { deleteUser, errorUserRequest } from "../../slices/user/user.slice";
import { baseApiURL, profileEndpoint } from "../../../api/urls";
import axios from "axios";

export const actionDeleteUser = async (dispatch, token) => {
  try {
    let response = await axios.delete(
      baseApiURL + profileEndpoint,
      {},
      {
        headers: {
          Authorization: "Bearer" + token,
        },
      }
    );
    dispatch(
      deleteUser({
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
