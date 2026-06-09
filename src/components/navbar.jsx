import { NavLink } from "react-router-dom";
import logo from "../assets/images/reallogo.webp"
import { Menu,X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
    const [menu,setmenu]=useState(false)
const mobile_menu = ()=>{
setmenu(!menu)
}

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-white hover:bg-blue-500/30 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-br  bg-gray-400 backdrop-blur-xl shadow-lg max-h-[20%]">
      <div className="max-w-7xl  mx-auto  px-6  py-4 not-sm:py-1  not-sm:px-4  flex justify-between items-center   ">
        
        {/* Logo */}
        <NavLink to="/" >
        <img src={logo} alt="" className="w-65 rounded-3xl sm:rounded-4xl not-sm:w-40 h-auto " /> 
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-3 items-center ">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/explore-course" className={linkClasses}>
            Explore Books
          </NavLink>
          <NavLink to="/borrow_return" className={linkClasses}>
            Borrow / Return
          </NavLink>
          <NavLink to="/entry_exit" className={linkClasses}>
            Entry / Exit
          </NavLink>
          <NavLink to="/profile" className={linkClasses}>
            Profile
          </NavLink>
          <NavLink
            to="/admin_dashboard"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Admin 
          </NavLink>
        </div>

        {/* Mobile placeholder */}
        <div className="md:hidden">
          <span className="text-white px-3 py-1 "
          onClick={mobile_menu}
          >
        {menu ? <X /> : <Menu />}

          </span>
        </div>
      </div>
       

       {/* //mobile link */}
  <div
  className={`flex flex-col sm:hidden text-white justify-center items-center absolute  w-full
    py-3 px-5 gap-3.5 z-50 
    bg-linear-to-br bg-gray-400
    backdrop-blur-xl shadow-lg transition-all duration-300
    ${menu ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden  pointer-events-none"}
  `}
>

        <NavLink
        onClick={mobile_menu}
        className="backdrop-blur-xl shadow-lg  bg-white/30 px-3 rounded-md"
        to={"/"} >
            Home
        </NavLink>



    <NavLink
    onClick={mobile_menu}
        className="backdrop-blur-xl shadow-lg  bg-white/30 px-3 rounded-md"
        to={"/about"} >
            About
        </NavLink>

 <NavLink
 onClick={mobile_menu}
        className="backdrop-blur-xl shadow-lg  bg-white/30 px-3 rounded-md"
        to={"/profile"} >
            Profile
        </NavLink>

            <NavLink
            onClick={mobile_menu}
        className="backdrop-blur-xl shadow-lg  bg-white/30 px-3 rounded-md"
        to={"/explore-course"} >
            Explore Books
        </NavLink>


            <NavLink
              onClick={mobile_menu}
          
        className="backdrop-blur-xl shadow-lg  bg-white/30 px-3 rounded-md"
        to={"/borrow_return"} >
            Borrow / Return
        </NavLink>


            <NavLink
             onClick={mobile_menu}
                 className="backdrop-blur-xl shadow-lg  bg-white/30 px-3 rounded-md"
        to={"/entry_exit"} >
           
   
            Entry / Exit
        </NavLink>

        
           
        
       </div>
    </nav>
  );
};

export default Navbar;
