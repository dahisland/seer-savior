import { createUser, errorUserRequest } from "../../slices/user/user.slice";
import axios from "axios";
import { baseApiURL, signupEndpoint } from "../../../api/urls";

export const actionCreateUser = async (dispatch, objData) => {
  try {
    let response = await axios.post(baseApiURL + signupEndpoint, {
      email: objData.email,
      password: objData.password,
      surname: objData.surname,
    });
    dispatch(
      createUser({
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
