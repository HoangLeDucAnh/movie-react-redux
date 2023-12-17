import moment from "moment";
import React from "react";

export default function ItemMovie({ phim }) {
  return (
    <div className="flex space-x-5">
      <img
        src={phim.hinhAnh}
        className="w-32 h-48 object-cover"
        alt="ảnh phim"
      />
      <div>
        <h2 className="text-3xl">{phim.tenPhim}</h2>
        <div className="grid grid-cols-3 gap-10 mt-5">
          {phim.lstLichChieuTheoPhim.slice(0, 16).map((lichChieu) => {
            return (
              <span
                key={lichChieu.maLichChieu}
                className="text-red-500 font-medium cursor-pointer"
              >
                {moment(lichChieu.ngayChieuGioChieu).format(
                  "DD - MM - YYYY /**/ hh:mm"
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
