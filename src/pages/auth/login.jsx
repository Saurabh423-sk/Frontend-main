import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import login_thunk from "../../redux-toolkit/all_api/login-api.js"

const Login = () => {
const navigate = useNavigate()
const [data,setdata]=useState({})
const dispatch =useDispatch()
const handlechange = (e)=>{
setdata({...data,[e.target.name]:e.target.value})


}

const handlesubmit = async (e,data)=>{
try{
    e.preventDefault()
 const res =     await dispatch(login_thunk(data)).unwrap()

if(res){
    alert(res.message)
  const user_data = res.user;
   if(user_data.isActive){
    localStorage.setItem("user", JSON.stringify(user_data)); 
    navigate("/")
   }

     
     
 
}

}
catch(error){
  alert(error.message)
}
}




  return (
   <div className="h-dvh flex items-center justify-center bg-cover bg-center authbg overflow-hidden">

      <div className="w-90 p-8 rounded-2xl bg-white/40 backdrop-blur-xl border authbgsm  border-white/50 shadow-3xl">
        <h1 className="text-2xl font-bold text-center text-blue-900">
          BRABU Library
        </h1>
        <p className="text-center text-blue-900 mb-6">
          Student Library Login
        </p>

        <form onSubmit={(e)=>{handlesubmit(e,data)}}  className="space-y-4">
          <input
            type="email"
            placeholder="Email"
           onChange={(e)=>{handlechange(e)}}
            name="email"
            className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
         name="password"
             onChange={(e)=>{handlechange(e)}}
            className="w-full px-4 py-2 rounded-lg bg-white/70 text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
            Login
          </button>
        </form>

        <p className="text-center text-md text-white mt-4 backdrop-blur-xl rounded  border-0">
          New student?{" "}
          <Link to="/signup" className="text-red-700 font-bold">
            Register here
          </Link>
        </p>

       
      </div>
    </div>
  );
};

export default Login;
