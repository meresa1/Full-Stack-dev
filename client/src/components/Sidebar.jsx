import React, { useContext, useEffect } from 'react'
import { FaPlus, FaTachometerAlt } from 'react-icons/fa'
import { NavLink, useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
//import SideNavItem from "./SideNavItem";

const Sidebar = () => {
  return (
    <div className="bg-white ">
      <div className="h-[50px] flex justify-items-stretch items-center shadow-md pl-2 py-4">
      <div className="container flex align-middle items-center justify-between mx-auto">
        {/* <h1 className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600"> */}
        {/*   <div>
          <h1 className="font-bold text-4xl text-gray-600 ">Dashbord</h1>
        </div> */}
        <div className="hover:bg-slate-600 hover:text-gray-50 p-4">
          <NavLink to={`/`}>Dashboard</NavLink>
        </div>
        <div className="hover:bg-slate-600 hover:text-gray-50 p-4">
          <NavLink to={`/pending`}>Request</NavLink>
        </div>
        <div className="hover:bg-slate-600 hover:text-gray-50 p-4">
          <NavLink to={`/orderd`}>Orders</NavLink>
        </div>
        <div className="hover:bg-slate-600 hover:text-gray-50 p-4">
          <NavLink to={`/status`}>Status</NavLink>
        </div>
        <div className="hover:bg-slate-600 hover:text-gray-50 p-4">
          <NavLink to={`/`}>Completed</NavLink>
        </div>
        </div>
      </div>

      {/*       <nav className="text-slate-400 text-base font-semibold scrollbar-hide overflow-y-scroll h-[calc(80vh-40px)]">
        <ul className="w-full justify-start items-center">
          <li className="hover:bg-slate-600 hover:text-gray-50 p-4">
            <NavLink to={`/`}>Dashboard</NavLink>
          </li>
          <li className="hover:bg-slate-600 hover:text-gray-50 p-4">
            <NavLink to={`/pending/`}>Request</NavLink>
          </li>
          <li className="hover:bg-slate-600 hover:text-gray-50 p-4">
            <NavLink to={`/orderd`}>Orders</NavLink>
          </li>
          <li className="hover:bg-slate-600 hover:text-gray-50 p-4">
            <NavLink to={`/status`}>Status</NavLink>
          </li>
        </ul>
      </nav> */}
    </div>
  )
}

export default Sidebar
