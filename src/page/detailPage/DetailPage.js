import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import https from "../../service/config";
import moment from "moment/moment";
import { Rate } from "antd";

export default function DetailPage() {
  const { idPhim } = useParams();
  const [newMovie, setNewMovie] = useState({});
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
      .then((result) => {
        setNewMovie(result.data.content);
      })
      .catch((err) => {});
  }, [idPhim]);
  const { tenPhim, hinhAnh, ngayKhoiChieu, danhGia } = newMovie;
  return (
    <div className="container grid grid-cols-2 place-items-center">
      <img src={hinhAnh} alt="" />
      <div className="text-center">
        <h1 className="text-6xl text-blue-600 font-bold">{tenPhim}</h1>
        <p className="mt-5 text-2xl">
          Ngày khởi chiếu:{" "}
          {moment(ngayKhoiChieu).format("DD / MM / YYYY - h:mm:ss")}
        </p>
        <Rate allowHalf value={danhGia} count={10} className="text-3xl mt-2" />
      </div>
    </div>
  );
}
