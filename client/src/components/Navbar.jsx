import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Layout } from '../Pages'

function Header() {
  const [top, setTop] = useState(true)

  const { currentCompany, logout } = useContext(AuthContext)

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 bg-opacity-40 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-2">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {currentCompany?.companyName ? (
                <>
                  <Layout />
                  <li>
                    <button
                      onClick={logout}
                      className="font-medium text-blue-600 hover:text-gray-900 px-5 border-2 border-cyan-300 rounded p-2 flex items-center transition duration-150 ease-in-out"
                    >
                      Logout
                    </button>
                  </li>

                  <li>
                    <NavLink
                      to="/request"
                      className="btn-sm rounded text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-cyan-800 ml-3 p-3"
                    >
                      <span>Request Order</span>
                    </NavLink>
                  </li>
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
      </div>
    </header>
  )
}

export default Header
