import { loginUser, errorUserRequest } from "../../slices/user/user.slice";
import axios from "axios";
import { baseApiURL, loginEndpoint } from "../../../api/urls";

export const actionLoginUser = async (dispatch, objData) => {
  try {
    let response = await axios.post(baseApiURL + loginEndpoint, {
      email: objData.email,
      password: objData.password,
      surname: objData.surname,
    });
    dispatch(
      loginUser({
        token: response.token,
        isConnected: true,
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
