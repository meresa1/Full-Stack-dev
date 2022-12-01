import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    company_name: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8888/api/customers/register",
        userData
      );
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Register
          </h5>
          <div>
            <label
              for="companyName"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Company Name
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              name="company_name"
              id="companyName"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="lama"
            />
          </div>
          <div>
            <label
              for="firstName"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your First Name
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              name="first_name"
              id="firstName"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="lama"
            />
          </div>
          <div>
            <label
              for="lastName"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Last Name
            </label>
            <input
              required
              onChange={handleChange}
              type="text"
              name="last_name"
              id="lastName"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="lama"
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              required
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Register
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an Account?{" "}
            <NavLink
              class="text-blue-700 hover:underline dark:text-blue-500"
              to={"/login"}
            >
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
