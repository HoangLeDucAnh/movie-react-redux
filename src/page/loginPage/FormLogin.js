import React from "react";
import { Button, Form, Input, message } from "antd";
import https from "../../service/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER } from "../redux/constant/constant";
import { loginAction } from "../redux/action/user";
const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishV1 = (values) => {
    https
      .post("api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        const jsonData = JSON.stringify(res.data.content);
        localStorage.setItem("user", jsonData);
        dispatch({
          type: SET_USER,
          payload: res.data.content,
        });
        navigate("/");
        message.success("Login successfully");
      })
      .catch((err) => {
        message.error("Login failed");
      });
  };
  const onFinish = (values) => {
    dispatch(loginAction(values, navigate));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          className="bg-sky-500 text-white hover:bg-black hover:border-transparent"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
