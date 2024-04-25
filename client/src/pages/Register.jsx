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
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <form
        className="flex flex-col gap-5 border border-b-4 w-1/4 h-1/2 justify-center items-center rounded-md border-blue-200 bg-slate-300"
        onSubmit={registerUser}
      >
        <h3 className=" font-bold text-xl">Sign Up</h3>
        {/* <label>Name</label> */}
        <div className="bg-slate-100 rounded-md flex items-center justify-center pl-1">
          <i className="ri-user-line"></i>
          <input
            className="bg-transparent placeholder-slate-400 focus:outline-none h-8 rounded-md p-4"
            required
            type="text"
            placeholder="Enter Name..."
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        {/* <label>Email</label> */}
        <div className="bg-slate-100 rounded-md flex items-center justify-center pl-1">
          <i className="ri-mail-line"></i>
          <input
            className="bg-transparent placeholder-slate-400 focus:outline-none h-8 rounded-md p-4"
            required
            type="email"
            placeholder="Enter Email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        {/* <label>Password</label> */}
        <div className="bg-slate-100 rounded-md flex items-center justify-center pl-1">
          <i className="ri-lock-line"></i>
          <input
            className="bg-transparent placeholder-slate-400 focus:outline-none h-8 p-4"
            required
            type="text"
            placeholder="Enter Password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="rounded-2xl p-1 border w-32 bg-blue-500 text-white hover:bg-blue-700 mb-4"
            type="submit"
          >
            Submit
          </button>
          <Link className="text-center text-sm" to="/login">
            Already have a Account.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
