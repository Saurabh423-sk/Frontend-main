import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import check_thunk from "../redux-toolkit/all_api/check_api.js";
import logout_thunk from "../redux-toolkit/all_api/logout.js";

const Profile = () => {
  const { user, detail } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(check_thunk());
  }, [dispatch]);

  const handleLogout =() => {
   
    dispatch(logout_thunk());
    
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center authbg px-4">
      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-3xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          {/* ✅ Desktop Logout (only md and above) */}
          <div className="hidden md:flex justify-end mb-3">
            <button
             onClick={handleLogout}
              className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition active:scale-95"
            >
              Logout
            </button>
          </div>

          <h1 className="text-2xl font-bold text-white">
            BRABU Library
          </h1>
          <p className="text-gray-600">Student Profile</p>
        </div>

        {/* Profile Card */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          
          {/* Avatar */}
          <div className="w-24 h-24 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
            {user?.fullname?.charAt(0).toUpperCase() || "?"}
          </div>

          {/* Info Section */}
          <div className="text-center md:text-left w-full">
            
            <h2 className="text-xl font-bold text-gray-900">
              {user?.fullname.toUpperCase() || "Loading..."}
            </h2>

            {/* Course + Status Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-1">

              <p className="text-gray-700">
                {user?.department} • {user?.sem}
              </p>

              <span className="mt-2 md:mt-0 inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                {user?.isactive ? "Active" : "not active"}
              </span>

            </div>

            
          

           
  <div className="mt-3 md:hidden">
              <button
                onClick={handleLogout}
                className="w-full cursor-pointer bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold shadow-md transition active:scale-95"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {[
            ["Roll Number", user?.roll_no],
            ["Email", user?.email],
            ["Phone", user?.phone_no],
            ["Department", user?.department],
          ].map(([label, value]) => (
            <div
              key={label}
              className="bg-white/70 rounded-xl p-4 border border-white/40"
            >
              <p className="text-sm text-gray-600">{label}</p>
              <p className="font-semibold text-gray-900">
                {value || "-"}
              </p>
            </div>
          ))}
        </div>

        {/* Library Stats */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/70 rounded-xl p-5 text-center">
            <p className="text-sm text-gray-600">Library Visits</p>
            <p className="text-2xl font-bold text-gray-900">
              {detail.library_visit.length || 0}
            </p>
          </div>

          <div className="bg-white/70 rounded-xl p-5 text-center">
            <p className="text-sm text-gray-600">Books Issued</p>
            <p className="text-2xl font-bold text-gray-900">
              {detail.book_borrowed.length || 0}
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-700 font-medium backdrop-blur-md bg-white/40 rounded-lg py-2">
          ⚠ Profile data is managed by library admin
        </p>

      </div>
    </div>
  );
};

export default Profile;