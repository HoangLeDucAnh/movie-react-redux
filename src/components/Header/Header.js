import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.user);
  const renderBtn = () => {
    if (user) {
      return (
        <div>
          <span className="mx-5">{user.hoTen}</span>
          <button
            className="btn-theme"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="btn-theme"
          onClick={() => {
            //useNavigate() không là thay đổi state của redux, phải dispatch
            //==> reload lại trang luôn làm mất data trên redux
            window.location.href = "/login";
          }}
        >
          Login
        </button>
      );
    }
  };
  return (
    <div
      className="flex justify-between container py-5 items-center border-2 border-blue-200
    rounded my-2"
    >
      <span
        className="text-3xl text-red-500 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        LoveUKhanh
      </span>
      {renderBtn()}
    </div>
  );
}
