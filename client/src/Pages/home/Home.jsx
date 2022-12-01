import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Footer, Navbar } from "../../components";
import StatusCards from "../../components/StatusCards";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const [stats, setStats] = useState({
    pendingRequests: 0,
    totalRequests: 0,
  });
  const { currentCompany } = useContext(AuthContext);
  useEffect(() => {
    const getPendingRequests = async () => {
      try {
        const res = await axios.get(`http://localhost:8888/api/requests/request/count/${currentCompany.id}`);
        setStats(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPendingRequests();
  }, []);
  return (
    <div>
      {" "}
      <>
        <h1 className="text-3xl text-black pb-6">Dashboard Home</h1>

        <StatusCards stats={stats} />
      </>
    </div>
  );
};

export default Home;
