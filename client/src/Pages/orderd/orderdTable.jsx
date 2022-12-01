import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const OrderdTable = () => {
  const [pendingReq, setPendingReq] = useState({});

  const { currentCompany } = useContext(AuthContext);

  useEffect(() => {
    const getPending = async () => {
      try {
        const pending = await axios.get(
          `http://localhost:8888/api/requests/customer/orderd/${currentCompany.id}`
        );
        setPendingReq(pending.data);
        console.log(pending.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPending();
  }, []);
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Item ID
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
          {pendingReq.length > 0 &&
            pendingReq.map((pending, index) => (
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
                <td class="py-4 px-6 flex gap-6">
                  <NavLink
                    to={`/approve/${pending.id}`}
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
  );
};

export default OrderdTable;
