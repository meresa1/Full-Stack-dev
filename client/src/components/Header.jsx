import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'
import { FaAngleDown } from 'react-icons/fa'
import Sidebar from './Sidebar.jsx'

function Navbar() {
  const { currentCompany, logout } = useContext(AuthContext)
  return (
    <header className="px-4 py-2 bg-white">
      <div className="container flex align-middle items-center justify-between mx-auto">
        {/* <div className="flex w-[400px] xl:w-96"> */}

        {/*      <input
            type="search"
            className="
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white opacity-40 bg-clip-padding
              border border-solid border-gray-500
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleSearch"
            placeholder="Search"
          /> */}
        {/* </div> */}
        {/* Site navigation */}
        <nav className="flex flex-grow">
          <ul className="flex flex-grow justify-end flex-wrap items-center">
            {currentCompany?.companyName ? (
              <>
                <li>
                  <Sidebar />
                  <button
                    onClick={logout}
                    className="font-medium text-blue-600 hover:text-gray-900 px-5 border-2 border-cyan-300 rounded p-2 flex items-center transition duration-150 ease-in-out"
                  >
                    <span>Logout</span>
                  </button>
                </li>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/150?img=10"
                    className="w-[50px] h-[50px] rounded-full"
                    alt="Profile"
                  />
                  <FaAngleDown />
                </div>
                <div class="w-full overflow-x-hidden flex flex-col">
                  <main class="w-full flex-grow p-6">
                    <Outlet />
                  </main>
                </div>

                {/*    <li>
                  <NavLink
                    to="/request"
                    className="btn-sm rounded text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-800 ml-3 p-3"
                  >
                    <span>Request Order</span>
                  </NavLink>
                </li> */}
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="font-medium text-blue-600 hover:text-gray-900 px-5 border-2 border-cyan-300 rounded p-2 flex items-center transition duration-150 ease-in-out"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="btn-sm rounded text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-800 ml-3 p-3"
                  >
                    <span>Register</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
