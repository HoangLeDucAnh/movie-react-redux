import React from "react";
import { Card, Tooltip } from "antd";
import { NavLink } from "react-router-dom";
export default function ItemMovie({ item }) {
  const { Meta } = Card;
  const { hinhAnh, tenPhim, moTa, maPhim } = item;
  return (
    <div>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt="example" src={hinhAnh} />}
      >
        <Meta
          title={tenPhim}
          description={
            <Tooltip trigger="click" title={moTa}>
              <span className="line-clamp-1">{moTa}</span>
            </Tooltip>
          }
        />
        <NavLink
          to={`detail/${maPhim}`}
          className="btn-theme mt-2 inline-block text-lg nav-link"
        >
          <span>Xem chi tiết</span>
        </NavLink>
      </Card>
    </div>
  );
}
