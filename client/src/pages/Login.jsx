import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <form
        onSubmit={loginUser}
        className="flex flex-col gap-5 border border-b-4 w-1/4 h-1/2 justify-center items-center rounded-md border-blue-200 bg-slate-300"
      >
        <h3 className=" font-bold text-xl">Login</h3>
        {/* <label className="">Email</label> */}
        <div className="bg-slate-100 rounded-md flex items-center justify-center pl-1">
          <i className="ri-user-line"></i>
          <input
            className="bg-transparent placeholder-slate-400 h-8 rounded-md p-4 focus:outline-none"
            type="email"
            placeholder="Enter Email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        {/* <label>Password</label> */}
        <div className=" bg-slate-100 rounded-md flex items-center justify-center pl-1">
          <i className="ri-lock-line"></i>
          <input
            className=" h-8  p-4 bg-transparent placeholder-slate-400 focus:outline-none"
            type="password"
            placeholder="Enter Password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            type="submit"
            className="rounded-2xl p-1 border w-32 bg-blue-500 text-white hover:bg-blue-700 mb-4"
          >
            Login
          </button>
          <Link className="text-center" to="/register">
            Create a Account.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
