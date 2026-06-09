import { useDispatch } from "react-redux";
import admin_thunk from "../../redux-toolkit/Admin/admin-api.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate()
const dispatch= useDispatch();
const [data,setdata]=useState({})
const handlechange = (e)=>{
  setdata({...data,[e.target.name]:e.target.value})
}

  const handleSubmit = async (e,data) => {
   try{ e.preventDefault();
    const res = await dispatch(admin_thunk(data)).unwrap()
  alert(res.message)
 if(res.success) return navigate("/admin_dashboard")

   }catch(err){
    alert(err.message)
    console.log(err)

   }

  };

  return (
   <div className="h-screen flex items-center justify-center bg-cover bg-center authbg overflow-hidden overflow-y-auto">
      <div className="w-90 not-sm:w-80 p-8 rounded-2xl bg-white/20 backdrop-blur-lg border authbg  border-white/30 shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-white">
          BRABU Library
        </h1>
        <p className="text-center text-white mb-6">
          Admin Login
        </p>

        <form onSubmit={(e)=>{handleSubmit(e,data)}} className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            name="email"
           onChange={(e)=>{handlechange(e)}}
            className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-800"
            required
          />

          <input
            type="password"
            placeholder="Password"
          name="password"
           onChange={(e)=>{handlechange(e)}}
            className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-800"
            required
          />

          <button className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
