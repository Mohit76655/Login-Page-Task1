import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen bg-slate-200">
      <h1 className=" font-bold text-5xl text-slate-400">Dashboard</h1>
      {!!user && <h2 className=" text-2xl font-bold">Hi {user.name} !</h2>}
    </div>
  );
};

export default Dashboard;
