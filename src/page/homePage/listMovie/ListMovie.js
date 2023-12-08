import React, { useEffect, useState } from "react";
import https from "../../../service/config";
import ItemMovie from "../itemMovie/ItemMovie";

export default function ListMovie() {
  const [listPhim, setListPhim] = useState([]);
  useEffect(() => {
    https
      .get("api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")
      .then((result) => {
        setListPhim(result.data.content);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5 container">
      {listPhim.map((item, index) => {
        return <ItemMovie item={item} key={index} />;
      })}
    </div>
  );
}
