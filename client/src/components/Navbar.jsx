import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-slate-950 text-white flex gap-8 justify-center items-center h-11 ">
      <Link className="hover:text-orange-500" to="/">
        Home
      </Link>
      <Link className="hover:text-orange-500" to="/login">
        Login
      </Link>
      <Link className="hover:text-orange-500" to="/register">
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
