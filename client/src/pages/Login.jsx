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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={loginUser}
        className="flex flex-col gap-5 border border-b-4 w-1/2 h-1/2 justify-center items-center rounded-md border-blue-100 bg-slate-200"
      >
        <h3 className=" font-bold text-xl">Login</h3>
        {/* <label className="">Email</label> */}
        <input
          className="border h-8 rounded-md p-4"
          type="email"
          placeholder="Enter Email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {/* <label>Password</label> */}
        <input
          className="border h-8 rounded-md p-4"
          type="password"
          placeholder="Enter Password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="rounded-2xl p-1 border w-32 bg-blue-500 text-white hover:bg-blue-700"
          >
            Login
          </button>
          <Link
            className="rounded-2xl p-1 border w-32 bg-blue-500 text-white text-center hover:bg-blue-700"
            to="/register"
          >
            register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
