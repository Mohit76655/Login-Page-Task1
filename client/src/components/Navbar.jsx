import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center relative items-center bg-slate-200">
      <nav className=" text-white flex gap-8 justify-evenly items-center h-11 rounded-full w-1/2 bg-blue-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-300 fixed top-10 transition-all ease duration-500 ">
        <Link
          className="font-bold bg-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-bold bg-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="font-bold bg-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          to="/register"
        >
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
