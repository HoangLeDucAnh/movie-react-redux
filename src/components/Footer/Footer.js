import React from "react";
import cgv from "../../logoImage/cgv.jpg";
import bhd from "../../logoImage/bhd.jpg";
import galaxy from "../../logoImage/galaxy.png";
import cinestar from "../../logoImage/cinestar.png";
import lotte from "../../logoImage/lotte-cinema.jpg";
import mega from "../../logoImage/megags.png";
import ddcinema from "../../logoImage/ddcinema.png";
import betaCinema from "../../logoImage/beta-cinema.png";
import loa from "../../logoImage/loa.png";

export default function Footer() {
  return (
    <div className="py-10 mt-10" style={{ backgroundColor: "#212121" }}>
      <div className="grid grid-cols-3 container py-5 gap-5 text-white  font-bold">
        <h2>X Cinema</h2>
        <h2>ĐỐI TÁC</h2>
        <div className="grid grid-cols-2">
          <h2>MOBILE APPS</h2>
          <h2>SOCIAL</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 cursor-pointer container gap-5">
        <div className=" ">
          <div className="grid grid-cols-2 gap-10 text-gray-300">
            <p className="redHover">FAQ</p>
            <p className="redHover">Thỏa thuận sử dụng</p>
            <p className="redHover">Brand Guidelines</p>
            <p className="redHover">Chính sách bảo mật</p>
          </div>
        </div>
        <div className=" ">
          <div
            className="grid grid-cols-4 gap-14
           "
          >
            <a>
              <img src={cgv} className="icon" />
            </a>
            <a>
              <img src={bhd} className="icon" />
            </a>
            <a>
              <img src={galaxy} className="icon" />
            </a>
            <a>
              <img src={mega} className="icon" />
            </a>
            <a>
              <img src={lotte} className="icon" />
            </a>
            <a>
              <img src={cinestar} className="icon" />
            </a>
            <a>
              <img src={ddcinema} className="icon" />
            </a>
            <a>
              <img src={betaCinema} className="icon" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 text-gray-300">
          <div className="">
            <i className="fab fa-android me-3 text-3xl redHover"></i>
            <i className="fab fa-apple text-3xl redHover"></i>
          </div>
          <div>
            <i className="fab fa-facebook me-3 text-3xl redHover"></i>
            <i className="fab fa-instagram text-3xl redHover"></i>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t-2 gridCustom px-5 gap-10">
        <div className="flex items-center justify-center mt-10">
          <img src={loa} alt="" style={{ width: "220px", height: "170px" }} />
        </div>
        <div className="mt-10 text-white text-center">
          <h6 className="py-5">
            X Cinema – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN AN KHANG
          </h6>
          <h6>Địa chỉ: Nam Cao, Tân Phú, Tp. Hồ Chí Minh, Việt Nam.</h6>
          <h6>Giấy chứng nhận đăng ký kinh doanh số: 2706200120052001.</h6>
          <h6>
            Đăng ký thay đổi lần thứ 30, ngày 20 tháng 05 năm 2024 do Sở kế
            hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
          </h6>
          <h6>Số Điện Thoại (Hotline): 1900 205201276201</h6>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <img
            src="https://demo1.cybersoft.edu.vn/static/media/daThongBao-logo.cb85045e.png"
            alt=""
            style={{ width: "200px" }}
          />
        </div>
      </div>
    </div>
  );
}
