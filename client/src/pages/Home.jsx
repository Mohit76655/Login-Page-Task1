import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-screen bg-hero-img bg-center bg-cover bg-no-repeat">
        <h1 className=" font-bold text-8xl text-slate-300">HOME</h1>
        {!!user && (
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className=" text-4xl font-bold text-white">
              Hi{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                {user.name}
              </span>{" "}
              !
            </h2>
            <Link
              className=" text-2xl font-semibold text-blue-200"
              to="/dashboard"
            >
              let's visit{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Dashboard
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
