import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-screen bg-slate-200">
        <h1 className=" font-bold text-8xl text-slate-300">DASHBOARD</h1>
        {!!user && (
          <h2 className=" text-4xl font-bold">Hi {user.name} Welcome Back</h2>
        )}
      </div>
    </>
  );
};

export default Dashboard;
