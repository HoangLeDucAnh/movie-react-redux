import { message } from "antd";
import https from "../../../service/config";
import { SET_USER } from "../constant/constant";

export const loginAction = (values, navigate) => {
  return (dispatch) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((result) => {
        const jsonData = JSON.stringify(result.data.content);
        localStorage.setItem("user", jsonData);
        dispatch({
          type: SET_USER,
          payload: result.data.content,
        });
        message.success("Login successfully by redux thunk");
        navigate("/");
      })
      .catch((err) => {
        message.error("Login failed by redux thunk");
      });
  };
};
