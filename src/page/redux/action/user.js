import { message } from "antd";
import https from "../../../service/config";

import { setUser } from "../reducer/reducer";

export const loginAction = (values, navigate) => {
  return (dispatch) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((result) => {
        const jsonData = JSON.stringify(result.data.content);
        localStorage.setItem("user", jsonData);
        //truyền vào payload là result.data.content, lấy ra thì action.payload
        dispatch(setUser(result.data.content));
        message.success("Login successfully by redux thunk");
        navigate("/");
      })
      .catch((err) => {
        message.error("Login failed by redux thunk");
      });
  };
};
