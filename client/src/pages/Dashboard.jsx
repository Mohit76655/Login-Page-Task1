import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-screen bg-hero-img bg-center bg-cover bg-no-repeat">
        <h1 className=" font-bold text-8xl text-slate-300">DASHBOARD</h1>
        {!!user && (
          <h2 className=" text-white text-4xl font-bold">
            Hi{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              {user.name}
            </span>{" "}
            Welcome Back
          </h2>
        )}
      </div>
    </>
  );
};

export default Dashboard;
