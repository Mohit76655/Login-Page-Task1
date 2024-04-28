import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center p-1 bg-slate-200">
      <nav className=" text-black flex gap-8 justify-evenly items-center h-11 rounded-full w-1/2 bg-blue-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-300 fixed top-0 transition-all ease-out duration-300 ">
        <Link className="hover:text-blue-700" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-700" to="/login">
          Login
        </Link>
        <Link className="hover:text-blue-700" to="/register">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
