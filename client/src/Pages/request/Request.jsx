import axios from "axios";
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Request = () => {
  const [item, setItem] = useState({});
  const { currentCompany } = useContext(AuthContext);

  const [requestData, setRequestData] = useState({
    customer_id: "",
    itemId: "",
    tariff: "",
    no_of_cars: "",
    starting_date: "",
    end_date: "",
    starting_place: "",
    destination: "",
    remark: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRequestData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    const getPending = async () => {
      try {
        const pending = await axios.get("http://localhost:8888/api/item");
        setItem(pending.data);
        console.log(pending.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPending();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      requestData.customer_id = currentCompany.id;
      const res = await axios.post(
        "http://localhost:8888/api/requests/",
        requestData
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <div className="flex justify-center">
        <h1 className="text-4xl text-black pb-2">Add Request</h1>
      </div>

      <div className="mt-200 mb-200 w-full flex flex-grow justify-center items-center">
        <form className="w-full max-w-lg bg-gray-50 p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="item"
              >
                Item Id
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="itemId"
                name="itemId"
                type="text"
                placeholder="Fuel"
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="tariff"
              >
                Tariff
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="tariff"
                name="tariff"
                type="number"
                placeholder="per kilo"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="no_of_cars"
              >
                Number of Cars
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="no_of_cars"
                name="no_of_cars"
                type="number"
                placeholder="1200"
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="starting_date"
              >
                Staring Date
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="starting_date"
                name="starting_date"
                type="date"
                placeholder="Fuel"
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="end_date"
              >
                End Date
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="end_date"
                name="end_date"
                type="date"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="starting_place"
              >
                Starting Place
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="starting_place"
                name="starting_place"
                type="text"
                placeholder="city"
              />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="destination"
              >
                Destination
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="destination"
                name="destination"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="remark"
            >
              Remark
            </label>
            <textarea
              onChange={handleChange}
              id="remark"
              name="remark"
              cols="60"
              rows="6"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-sm rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-800 hover:via-purple-800 hover:to-pink-800 mt-2 p-3 px-4"
            onClick={handleSubmit}
          >
            <span>Submit Request</span>
          </button>
        </form>
      </div>
      {/*  Page sections */}
    </div>
  );
};

export default Request;
