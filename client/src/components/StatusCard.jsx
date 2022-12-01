import React from "react";
import { NavLink } from "react-router-dom";

const StatusCard = ({ title, count, icon }) => {
  return (
    <NavLink to={"/pending"}>
      <div class="rounded overflow-hidden shadow-lg hover:shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class="px-6 py-6">
          <div class="font-bold text-xl mb-2 text-white">{title}</div>
        </div>
        <div class="px-6 pt-4 pb-2 flex flex-row justify-between">
          <p className="text-3xl text-white">{count}</p>
          {icon}
        </div>
      </div>
    </NavLink>
  );
};

export default StatusCard;