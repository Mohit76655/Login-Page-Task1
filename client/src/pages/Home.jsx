import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-screen bg-slate-200">
        <h1 className=" font-bold text-8xl text-slate-300">HOME</h1>
        {!!user && (
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className=" text-4xl font-bold">Hi {user.name} !</h2>
            <Link
              className=" text-2xl font-semibold text-blue-500"
              to="/dashboard"
            >
              let's visit Dashboard
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
