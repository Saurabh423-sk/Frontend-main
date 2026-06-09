import { Link } from "react-router-dom";
import logo from "../assets/images/reallogo.webp"
const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-blue-950 via-blue-900 to-black text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

      
        <div>
           <img src={logo} alt="" className="w-65 mb-4 rounded-3xl sm:rounded-4xl not-sm:w-40 h-auto " /> 
          <p className="text-sm leading-relaxed">
          Building a disciplined learning environment by providing structured knowledge and secure digital access to academic resources.
          </p>
          <p className="text-sm mt-3">
          Muzaffarpur, Bihar, India
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Library</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/explore_books" className="hover:text-white transition">
                Explore Books
              </Link>
            </li>
            <li>
              <Link to="/borrow_return" className="hover:text-white transition">
                Borrow / Return
              </Link>
            </li>
            <li>
              <Link to="/entry_exit" className="hover:text-white transition">
                Entry / Exit
              </Link>
            </li>
            <li>
              <Link to="/rules" className="hover:text-white transition">
                Library Rules
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Students</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/login" className="hover:text-white transition">
                Student Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-white transition">
                Student Registration
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-white transition">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-white transition">
                Help & Support
              </Link>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-white font-semibold mb-4">Administration</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/adminlogin" className="hover:text-red-400 transition">
                Admin Login
              </Link>
            </li>
            <li>
              <span className="text-gray-400">
                Approval Dashboard
              </span>
            </li>
            <li>
              <span className="text-gray-400">
                Reports & Records
              </span>
            </li>
          </ul>
        </div>

      </div>

      
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BRABU . All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed for Digital Library Management
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
