import { NavLink } from "react-router-dom";
import logo from "../../assets/images/reallogo.webp";

const Admin_nav = () => {
  const isactive = ({ isActive }) =>
    `w-[90%] py-2 px-4 text-center text-5xl tracking-wide  font-extrabold
    rounded-2xl backdrop-blur-2xl transition-all duration-300 ease-in-out
    shadow-2xl heading-smile
    ${
      isActive
        ? "bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 text-white shadow-blue-500/60 scale-105"
        : "bg-white/30 text-blue-800 shadow-gray-600 hover:bg-blue-500/30 hover:text-white hover:scale-102"
    }
`;
  return (
    <div
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/originals/4d/94/f8/4d94f8852025b36e8aa2c140ff276c7f.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderTopRightRadius: "50px",
      }}
      className="w-[20%] h-full p-3 opacity-90 flex flex-col justify-start items-center shadow-2xl shadow-gray-500 gap-6"
    >
      <NavLink to="/admin_dashboard">
        <img
          src={logo}
          alt=""
          className="w-65 shadow-2xl shadow-gray-700  rounded-3xl sm:rounded-4xl  not-sm:w-40 h-auto "
        />
      </NavLink>

      <NavLink to="/admin_dashboard" className={isactive}>
        Dashboard
      </NavLink>

      <NavLink to="/admin_students" className={isactive}>
        Students
      </NavLink>

      <NavLink to="/admin_books" className={isactive}>
        Books
      </NavLink>

      <NavLink to="/admin_borrow" className={isactive}>
        Borrow
      </NavLink>
      <NavLink to="/admin_return" className={isactive}>
        Return
      </NavLink>

      <NavLink to="/admin_entry_exit" className={isactive}>
        Entry / Exit
      </NavLink>
    </div>
  );
};

export default Admin_nav;
