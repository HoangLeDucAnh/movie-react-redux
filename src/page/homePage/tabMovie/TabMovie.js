import { Tabs, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import https from "../../../service/config";
import ItemMovie from "./ItemMovie";
export default function TabMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((result) => {
        setHeThongRap(result.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = heThongRap.map((heThong, index) => {
    return {
      key: index,
      label: (
        <div className="border-b-2">
          <img src={heThong.logo} className="w-16 mb-2" />
        </div>
      ),
      children: (
        <Tabs
          items={heThong.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.diaChi,
              label: (
                <div className="w-60 truncate text-left">
                  <Tooltip title={cumRap.diaChi}>
                    <p>{cumRap.tenCumRap}</p>
                  </Tooltip>
                </div>
              ),
              children: (
                <div
                  style={{ height: 600 }}
                  className="space-y-5 overflow-y-scroll"
                >
                  {cumRap.danhSachPhim.map((phim) => {
                    return <ItemMovie phim={phim} key={phim.maPhim} />;
                  })}
                </div>
              ),
            };
          })}
          tabPosition="left"
          style={{
            height: 600,
          }}
        />
      ),
    };
  });
  return (
    <div className="container mt-5">
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabPosition="left"
        style={{
          height: 220,
        }}
      />
    </div>
  );
}
