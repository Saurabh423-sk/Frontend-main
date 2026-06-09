import {useState} from "react"
import { useDispatch } from "react-redux";
import entry_exit_thunk from "../redux-toolkit/all_api/entry-exit.js"
const EntryExit = () => {
const[message,setmessage]=useState("")
const dispatch = useDispatch()
const request_handler  = async (req) =>{
try {
  const result =  await dispatch(entry_exit_thunk(req)).unwrap();
alert(result.message)
setmessage(result.message)
} catch (error) {
  alert(error)
setmessage(error)
}

}
 
 

  return (
    <div
      className=" py-25 bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
    >
      <div className="w-full max-w-sm bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 text-center">

        {/* Header */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
            📚
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mt-4">
            Library Entry / Exit
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            MGM College Library
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-6">
          <button
            onClick={()=>{request_handler("entry")}}
            className="w-full py-4 text-lg font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-lg"
          >
            ENTER 📥
          </button>

          <button
              onClick={()=>{request_handler("exit")}}
            className="w-full py-4 text-lg font-semibold rounded-xl bg-red-600 text-white hover:bg-red-700 transition shadow-lg"
          >
            EXIT 📤
          </button>
        </div>

        {/* Message */}
        {message && (
          <div className="mt-6 bg-white/70 backdrop-blur-md border border-green-200 rounded-xl py-3 text-green-700 font-semibold shadow">
            ✅ {message}
          </div>
        )}

        {/* Footer */}
        <p className="mt-8 text-xs text-slate-600 font-medium">
          Please maintain silence inside the library
        </p>
      </div>
    </div>
  );
};

export default EntryExit;
