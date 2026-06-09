import { useRef, useState } from "react";
import signup_thunk from "../../redux-toolkit/all_api/signup_api.js";
import { useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [data, setdata] = useState({});
  const confirm_password = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (data.password !== confirm_password.current.value) {
    alert("Password and confirm password should be same");
    return;
  }

  try {
    const response = await dispatch(signup_thunk(data)).unwrap();
   if(response){
     alert(response.message);
     const user_data = response.user;
  localStorage.setItem("user", JSON.stringify(user_data)); 
   navigate("/")
   }
  } catch (error) {
    alert(error?.message || "Registration failed ❌");
  console.log("Backend error:", error);
  }
};

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center authbg overflow-hidden ">
      <div className="w-105 p-8 rounded-2xl bg-white/60 backdrop-blur-lg border authbg border-white/30 shadow-3xl">
        <h1 className="text-2xl font-bold text-center text-blue-900">
          BRABU Library
        </h1>
        <p className="text-center text-blue-900 mb-6">Student Registration</p>

        <form
          onSubmit={(e) => { handleSubmit(e, data); }}
          className="space-y-3"
        >
          {[
            ["fullname", "Full Name", "text"],
            ["phone_no", "Phone Number", "text"],
            ["email", "Email Address", "email"],
            ["roll_no", "Roll Number (max 4 chars)", "text"],
            ["sem", "SEM/YEAR (1-8)", "number"],
          ].map(([name, placeholder, type]) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={(e) => { handleChange(e); }}
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          ))}

          {/* Department Dropdown */}
          <select
            name="department"
            onChange={(e) => { handleChange(e); }}
            className="w-full px-4 py-2 rounded-lg bg-white/70 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">-- Select Department --</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="BBM">BBM</option>
            <option value="BSC_IT">BSC_IT</option>
          </select>

          {/* Password with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password (5-12 characters)"
              onChange={(e) => { handleChange(e); }}
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm font-medium"
            >
              {showPassword ? "🙈 Hide" : "👁 Show"}
            </button>
          </div>

          {/* Confirm Password with toggle */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              ref={confirm_password}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm font-medium"
            >
              {showConfirmPassword ? "🙈 Hide" : "👁 Show"}
            </button>
          </div>

          <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
            Register
          </button>
        </form>

        <p className="text-sm backdrop-blur-3xl text-red-900 font-bold text-center mt-3">
          ⚠ Account activation requires admin approval
        </p>

        <p className="text-center text-sm text-gray-200 mt-2 backdrop-blur-2xl rounded">
          Already registered?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-bold text-xl text-shadow-2xs shadow-2xl shadow-black"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;