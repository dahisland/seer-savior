import { logoutUser } from "../../slices/user/user.slice";

export const actionLogoutUser = (dispatch) => {
  dispatch(
    logoutUser({
      status: "",
      message: "User disconnected",
    })
  );
};
