import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import PendingTable from "../pending/pendingTable";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Status = () => {
  const [requests, setRequests] = useState({});
  const [orders, setOrders] = useState({});

  const { currentCompany } = useContext(AuthContext);
  //console.log({currentCompany});

  useEffect(() => {
    const getRequests = async () => {
      try {
        const requests = await axios.get(
          `http://localhost:8888/api/requests/customer/${currentCompany.id}`
        );
        //setRequests(requests.data);
        setRequests(requests.data);

        console.log("res =>", requests.data);
      } catch (error) {
        console.log(error);
      }
    };
    //http://localhost:8888/api/requests//customer/orderd/

    const getOrders = async () => {
      try {
        const orders = await axios.get(
          `http://localhost:8888/api/requests/customer/orderd/${currentCompany.id}`
        );
        setOrders(orders.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRequests();
    getOrders();
  }, []);
  return (
    <>
      <div>
        {" "}
        <h1 className="text-3xl text-black pb-6">Status</h1>
        <div className="flex justify-end">
          <NavLink
            to={`/request/`}
            className="text-2xl font-mono p-2 bg-green-400 rounded text-white hover:bg-green-700"
          >
            Request Order
          </NavLink>
        </div>
      </div>
      {/*  // <br /> */}
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="container flex auto-rows-auto items-center justify-items-stretch mx-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Item Id
                </th>
                <th scope="col" class="py-3 px-6">
                  tariff
                </th>
                <th scope="col" class="py-3 px-6">
                  No of Cars
                </th>
                <th scope="col" class="py-3 px-6">
                  Starting Place
                </th>
                <th scope="col" class="py-3 px-6">
                  Destination
                </th>
                <th scope="col" class="py-3 px-6">
                  Starting Date
                </th>
                <th scope="col" class="py-3 px-6">
                  End Date
                </th>
                <th scope="col" class="py-3 px-6">
                  Remark
                </th>
                <th scope="col" class="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 &&
                requests.map((pending, index) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {pending.itemId}
                    </th>
                    <td class="py-4 px-6">{pending.tariff}</td>
                    <td class="py-4 px-6">{pending.noOfCars}</td>
                    <td class="py-4 px-6">{pending.startingPlace}</td>
                    <td class="py-4 px-6">{pending.destination}</td>
                    <td class="py-4 px-6">
                      {new Date(pending.startingDate).toLocaleDateString()}
                    </td>
                    <td class="py-4 px-6">
                      {new Date(pending.endDate).toLocaleDateString()}
                    </td>
                    <td class="py-4 px-6">{pending.remark}</td>
                    <td class="py-4 px-6 flex gap-2">
                      <NavLink
                        to={`/orderd/${pending.id}`}
                        class="font-medium text-green-600 dark:text-blue-500 hover:underline"
                      >
                        Details
                      </NavLink>
                  
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div className="text-3xl text-black pb-6">
        <div div className="flex justify-center">
          <h1 className="text-3xl font-mono p-2 bg-yellow-50-00 rounded text-black ">
            ORDERD Request
            <hr className="bg-black" />
          </h1>
        </div>
      </div>
      <br></br>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Item Id
              </th>
              <th scope="col" class="py-3 px-6">
                tariff
              </th>
              <th scope="col" class="py-3 px-6">
                No of Cars
              </th>
              <th scope="col" class="py-3 px-6">
                Starting Place
              </th>
              <th scope="col" class="py-3 px-6">
                Destination
              </th>
              <th scope="col" class="py-3 px-6">
                Starting Date
              </th>
              <th scope="col" class="py-3 px-6">
                End Date
              </th>
              <th scope="col" class="py-3 px-6">
                Remark
              </th>
              <th scope="col" class="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((pending, index) => (
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {pending.itemId}
                  </th>
                  <td class="py-4 px-6">{pending.tariff}</td>
                  <td class="py-4 px-6">{pending.noOfCars}</td>
                  <td class="py-4 px-6">{pending.startingPlace}</td>
                  <td class="py-4 px-6">{pending.destination}</td>
                  <td class="py-4 px-6">
                    {new Date(pending.startingDate).toLocaleDateString()}
                  </td>
                  <td class="py-4 px-6">
                    {new Date(pending.endDate).toLocaleDateString()}
                  </td>
                  <td class="py-4 px-6">{pending.remark}</td>
                  <td class="py-4 px-6 flex gap-2">
                    <NavLink
                      to={`/orderd/${pending.id}`}
                      class="font-medium text-green-600 dark:text-blue-500 hover:underline"
                    >
                      Approve
                    </NavLink>
                    <a
                      href="#"
                      class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    >
                      Decline
                    </a>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/*  <div className="p-6">
        {<PendingTable />}
      </div> */}
    </>
  );
};

export default Status;
