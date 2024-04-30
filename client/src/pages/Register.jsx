import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Sucessful. Welcome");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-hero-img bg-center bg-cover bg-no-repeat">
      <form
        className="flex flex-col gap-6 w-1/4 h-1/2 justify-center items-center rounded-md bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-300"
        onSubmit={registerUser}
      >
        <h3 className=" font-bold text-xl text-white">Sign Up</h3>
        {/* <label>Name</label> */}
        <div className="rounded-md flex items-center justify-center pl-1 border border-gray-300">
          <i className="ri-user-line text-white"></i>
          <input
            className="bg-transparent placeholder-slate-400 focus:outline-none h-8 rounded-md p-4 caret-white text-white"
            required
            type="text"
            placeholder="Enter Name..."
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        {/* <label>Email</label> */}
        <div className="rounded-md flex items-center justify-center pl-1 border border-gray-300">
          <i className="ri-mail-line text-white"></i>
          <input
            className="bg-transparent placeholder-slate-400 focus:outline-none h-8 rounded-md p-4 caret-white text-white"
            required
            type="email"
            placeholder="Enter Email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        {/* <label>Password</label> */}
        <div className="rounded-md flex items-center justify-center pl-1 border border-gray-300">
          <i className="ri-lock-line text-white"></i>
          <input
            className="bg-transparent placeholder-slate-400 focus:outline-none h-8 p-4  caret-white text-white"
            required
            type="text"
            placeholder="Enter Password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="rounded-2xl p-1 border w-32 bg-transparent text-white hover:border-blue-700 mb-4 active:border-green-500"
            type="submit"
          >
            Submit
          </button>
          {/* <Link className="text-center text-sm text-white" to="/login">
            Already have a Account.
          </Link> */}
        </div>
      </form>
    </div>
  );
};

export default Register;
