import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between bg-slate-950 h-9 p-8 max-w-9xl ">
      <div>
        <Link to='/' className="text-2xl md:text-3xl text-gray-100 ml-2 flex items-center font-Quicksand">DEMO</Link>
      </div>
      <div className="flex flex-row space-x-6 mr-2">
        <NavLink to='/about' className="text-md md:text-lg text-gray-100 font-Quicksand">ABOUT</NavLink>
        <NavLink to='/contact' className="text-md md:text-lg text-gray-100 font-Quicksand">CONTACT</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
